const { execSync } = require('child_process');
const html = execSync('git show c4e8e90:index.html', { maxBuffer: 15*1024*1024 }).toString('utf8');

console.log("c4e8e90:index.html size:", html.length);
const sections = html.match(/<section[\s\S]*?<\/section>/g);
if (sections) {
  console.log("Sections in c4e8e90:", sections.length);
  sections.forEach((s, idx) => {
    console.log(`\n=== SECTION ${idx} ===`);
    console.log(s.substring(0, 200));
  });
}
