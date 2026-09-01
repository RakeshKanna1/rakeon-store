const fs = require('fs');
const path = require('path');

const cleanStyleAddition = `  /* Comparison Matrix Table Readability */
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
  }
`;

const pricingTargets = [
  'pricing.html',
  'pricing/index.html',
  'public/pricing.html',
  'public/pricing/index.html',
  'public/showcase/pricing.html',
  'public/showcase/pricing/index.html'
];

pricingTargets.forEach(target => {
  const fullPath = path.resolve(__dirname, '..', target);
  if (!fs.existsSync(fullPath)) return;

  let content = fs.readFileSync(fullPath, 'utf8');
  if (content.includes('/* Comparison Matrix Table Readability */')) {
    console.log(`[Pricing Style] Already present in: ${target}`);
    return;
  }

  const needle = '<style id="pricing-master-clean-style">\n';
  if (content.includes(needle)) {
    content = content.replace(needle, needle + cleanStyleAddition);
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`[Pricing Style] Added table styles to: ${target}`);
  }
});
