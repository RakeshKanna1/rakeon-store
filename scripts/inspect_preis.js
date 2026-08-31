const { execSync } = require('child_process');
const html = execSync('git show 18d534f:pricing.html', { maxBuffer: 15*1024*1024 }).toString('utf8');

console.log("Size of 18d534f:pricing.html:", html.length);
const sections = html.match(/<section[\s\S]*?<\/section>/g);
if (sections) {
  console.log("Sections count in 18d534f:pricing.html:", sections.length);
  sections.forEach((s, idx) => {
    console.log(`\n=== SECTION ${idx} ===`);
    console.log(s.substring(0, 200).replace(/\n/g, ' '));
  });
}
