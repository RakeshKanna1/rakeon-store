const { execSync } = require('child_process');
const html = execSync('git show 63a153a:pricing.html', { maxBuffer: 15*1024*1024 }).toString('utf8');

console.log("63a153a:pricing.html full size:", html.length);
const sections = html.match(/<section[\s\S]*?<\/section>/g);
console.log("Sections count:", sections ? sections.length : 0);
if (sections) {
  sections.forEach((s, idx) => {
    console.log(`\n=== SECTION ${idx} ===`);
    console.log(s.substring(0, 150).replace(/\n/g, ' '));
  });
}
