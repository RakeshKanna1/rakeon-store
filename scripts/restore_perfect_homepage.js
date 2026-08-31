const fs = require('fs');
const { execSync } = require('child_process');

// 1. Get complete c4e8e90:index.html (which has hero, intro, service cards, next page, footer)
const fullBaseHtml = execSync('git show c4e8e90:index.html', { maxBuffer: 15*1024*1024 }).toString('utf8');

// 2. Extract Section 3 (Pricing Matrix) from 18d534f:index.html
const old18Html = execSync('git show 18d534f:index.html', { maxBuffer: 15*1024*1024 }).toString('utf8');
const pricingMatch = old18Html.match(/<section id="pricing-matrix"[\s\S]*?<\/section>/);
if (!pricingMatch) {
  console.error("Could not find pricing-matrix in 18d534f");
  process.exit(1);
}
const pricingMatrixSection = pricingMatch[0];

// Extract pricing matrix styles and script from 18d534f
const styleMatch = old18Html.match(/<style id="rakexura-scoped-refinements">[\s\S]*?<\/style>/);
const pricingMatrixStyle = styleMatch ? styleMatch[0] : '';

const scriptMatch = old18Html.match(/<script>\s*\(function\(\)\s*\{\s*const HOME_RATES[\s\S]*?<\/script>/);
const pricingMatrixScript = scriptMatch ? scriptMatch[0] : '';

console.log("Full base HTML size:", fullBaseHtml.length);
console.log("Pricing Matrix size:", pricingMatrixSection.length);

// 3. Build new index.html by inserting pricingMatrixSection right before <section ... class="next-page"
let newIndexHtml = fullBaseHtml;

// Make sure pricing matrix is inserted before next-page
if (newIndexHtml.includes('class="next-page"') || newIndexHtml.includes('data-next-page')) {
  newIndexHtml = newIndexHtml.replace(
    /(<section[^>]*class="[^"]*next-page[^"]*"[^>]*>)/,
    pricingMatrixSection + '\n\n$1'
  );
}

// Add the pricing style before </head> if not already there
if (!newIndexHtml.includes('id="rakexura-scoped-refinements"') && pricingMatrixStyle) {
  newIndexHtml = newIndexHtml.replace('</head>', pricingMatrixStyle + '\n</head>');
}

// Add the pricing script before </body> if not already there
if (!newIndexHtml.includes('const HOME_RATES') && pricingMatrixScript) {
  newIndexHtml = newIndexHtml.replace('</body>', pricingMatrixScript + '\n</body>');
}

// Write to index.html, public/index.html, public/showcase/index.html
['index.html', 'public/index.html', 'public/showcase/index.html'].forEach(p => {
  fs.writeFileSync(p, newIndexHtml, 'utf8');
  console.log("Written full homepage to:", p);
});

console.log("Homepage completely restored with all sections intact!");
