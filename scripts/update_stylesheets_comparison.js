const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const lightModeCss = `/* Pricing Comparison Matrix - Default Light Theme */
.pricing-compare-section {
  background-color: #ffffff !important;
  border: 1.5px solid #18181b !important;
  color: #18181b !important;
}

.pricing-compare-section table {
  color: #18181b !important;
}

.pricing-compare-section th {
  color: #18181b !important;
}

.pricing-compare-section td {
  color: #18181b !important;
}

.pricing-compare-section td strong {
  color: #18181b !important;
}

.pricing-compare-section td[style*="color: #71717a"],
.pricing-compare-section td[style*="color:#71717a"],
.pricing-compare-section td[style*="color: #888888"],
.pricing-compare-section td[style*="color:#888888"] {
  color: #71717a !important;
}`;

const cssTargets = [
  'styles.css',
  'public/styles.css',
  'public/showcase/styles.css'
];

const oldRuleRegex = /(?:html\.dark-theme \.pricing-compare-section,\s*body\.dark-theme \.pricing-compare-section[\s\S]*?color: #f8fafc !important;\s*})|(?:(?:\/\*\s*Pricing Comparison Matrix - Default Light Theme[\s\S]*?color:\s*#71717a\s*!important;\s*\}))/;

cssTargets.forEach(target => {
  const fullPath = path.resolve(__dirname, '..', target);
  if (!fs.existsSync(fullPath)) return;

  let content = fs.readFileSync(fullPath, 'utf8');
  if (oldRuleRegex.test(content)) {
    content = content.replace(oldRuleRegex, lightModeCss);
  } else {
    // If not found, insert before the harmonious dark theme section
    const marker = '/* ==========================================================================\n   RAKEXURA HARMONIOUS CYBER DARK THEME';
    if (content.includes(marker)) {
      content = content.replace(marker, lightModeCss + '\n\n' + marker);
    } else {
      content = content + '\n\n' + lightModeCss + '\n';
    }
  }

  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`[CSS] Updated light theme matrix styles in: ${target}`);
});

// Now re-run fix_dark_mode_colors.js
execSync('node scripts/fix_dark_mode_colors.js', { stdio: 'inherit' });
console.log("Stylesheets updated successfully.");
