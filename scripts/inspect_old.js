const { execSync } = require('child_process');
const commits = execSync('git log --oneline', { maxBuffer: 10*1024*1024 }).toString('utf8').split('\n');

for (const line of commits) {
  const hash = line.split(' ')[0];
  if (!hash) continue;
  try {
    const html = execSync('git show ' + hash + ':index.html', { maxBuffer: 10*1024*1024 }).toString('utf8');
    if (html.includes('pricing-grid') || html.includes('Xbox PC Game Pass') || html.includes('home-pricing')) {
      console.log('Found plans in commit:', line);
    }
  } catch(e) {}
}
