const { execSync } = require('child_process');
const fs = require('fs');

const pages = ['pricing.html', 'validation.html', 'support.html', 'track.html', 'manage.html', 'terms.html', 'privacy.html', 'imprint.html'];

pages.forEach(p => {
  const c4Size = execSync(`git show c4e8e90:${p}`, { maxBuffer: 15*1024*1024 }).length;
  const curSize = fs.existsSync(p) ? fs.readFileSync(p, 'utf8').length : 0;
  console.log(`${p}: c4e8e90 size = ${c4Size}, current size = ${curSize}`);
});
