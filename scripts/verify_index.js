const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const sections = html.match(/<section[\s\S]*?<\/section>/g);
console.log('Sections count in index.html:', sections ? sections.length : 0);
if (sections) {
  sections.forEach((s, idx) => {
    console.log('Section ' + idx + ':', s.substring(0, 150).replace(/\n/g, ' '));
  });
}

// Check header
const headerMatch = html.match(/<header[\s\S]*?<\/header>/);
console.log('\nHeader exists:', !!headerMatch);
