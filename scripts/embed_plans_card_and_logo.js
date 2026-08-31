const fs = require('fs');
const path = require('path');

// 1. Read pricing section from pricing.html
const pricingHtml = fs.readFileSync('pricing.html', 'utf8');

// Extract the <main ...> ... </main> section from pricing.html
const mainMatch = pricingHtml.match(/<main id="main"[\s\S]*?<\/main>/);
if (!mainMatch) {
  console.error("Could not extract main pricing section from pricing.html");
  process.exit(1);
}
const pricingMainContent = mainMatch[0];

// Extract the pricing master engine script
const scriptMatch = pricingHtml.match(/<script id="rakexura-pricing-master-engine">[\s\S]*?<\/script>/);
const pricingScriptContent = scriptMatch ? scriptMatch[0] : '';

// 2. Process all index.html files
const targetIndexFiles = [
  'index.html',
  'public/index.html',
  'public/showcase/index.html'
];

targetIndexFiles.forEach(filePath => {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // If index.html already has <section id="pricing-matrix" ...> or similar placeholder, replace it or insert before footer
  if (content.includes('id="pricing-matrix"')) {
    content = content.replace(/<section id="pricing-matrix"[\s\S]*?<\/section>/, pricingMainContent);
  } else if (content.includes('<footer')) {
    content = content.replace('<footer', pricingMainContent + '\n<footer');
  }

  // Ensure pricing engine script is included before </body>
  if (!content.includes('id="rakexura-pricing-master-engine"') && pricingScriptContent) {
    content = content.replace('</body>', pricingScriptContent + '\n</body>');
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log("Embedded plans cards into:", filePath);
});

console.log("Successfully embedded plans cards into Subscriptions page!");
