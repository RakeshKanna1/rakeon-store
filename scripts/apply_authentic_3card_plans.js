const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log("Extracting authentic 3-card pricing design from commit 63a153a...");

// 1. Get authentic pricing.html (source of truth)
const pricingHtml63 = fs.existsSync('pricing.html') 
  ? fs.readFileSync('pricing.html', 'utf8') 
  : execSync('git show 63a153a:pricing.html', { maxBuffer: 15*1024*1024 }).toString('utf8');

// Extract the <section class="section is-pricing" ...> ... </section>
const sectionMatch = pricingHtml63.match(/<section class="section is-pricing"[\s\S]*?<\/section>/);
if (!sectionMatch) {
  console.error("Could not find section is-pricing in 63a153a");
  process.exit(1);
}
const pricingSection = sectionMatch[0];

// Extract pricing engine script
const engineScriptMatch = pricingHtml63.match(/<script id="rakexura-pricing-master-engine">[\s\S]*?<\/script>/);
const pricingEngineScript = engineScriptMatch ? engineScriptMatch[0] : '';

console.log("Extracted pricing section (size: " + pricingSection.length + ")");

// 2. Write to pricing.html and all pricing variants
const pricingTargets = [
  'pricing.html',
  'pricing/index.html',
  'public/pricing.html',
  'public/pricing/index.html',
  'public/showcase/pricing.html',
  'public/showcase/pricing/index.html'
];

pricingTargets.forEach(p => {
  if (fs.existsSync(p)) {
    fs.writeFileSync(p, pricingHtml63, 'utf8');
    console.log("Updated pricing page:", p);
  }
});

// 3. Update index.html to have this exact 3-card section before next-page
const indexTargets = [
  'index.html',
  'public/index.html',
  'public/showcase/index.html'
];

indexTargets.forEach(p => {
  if (!fs.existsSync(p)) return;
  let html = fs.readFileSync(p, 'utf8');

  // Remove previous pricing matrix if present
  html = html.replace(/<section id="pricing-matrix"[\s\S]*?<\/section>/g, '');
  html = html.replace(/<section class="section is-pricing"[\s\S]*?<\/section>/g, '');

  // Wrap section in #pricing-matrix id for smooth anchor linking
  const homePricingSection = pricingSection.replace('<section class="section is-pricing"', '<section id="pricing-matrix" class="section is-pricing"');

  // Insert before <section ... class="next-page"
  if (html.includes('class="next-page"') || html.includes('data-next-page')) {
    html = html.replace(/(<section[^>]*class="[^"]*next-page[^"]*"[^>]*>)/, homePricingSection + '\n\n$1');
  }

  // Ensure engine script is present
  if (!html.includes('id="rakexura-pricing-master-engine"') && pricingEngineScript) {
    html = html.replace('</body>', pricingEngineScript + '\n</body>');
  }

  fs.writeFileSync(p, html, 'utf8');
  console.log("Updated index page with 3-card plans:", p);
});

// 4. Ensure dark mode styles are appended cleanly to styles.css
console.log("Applying dark mode palette...");
execSync('node scripts/fix_dark_mode_colors.js');

console.log("Finished syncing authentic 3-card plans with Xbox & NVIDIA icons!");
