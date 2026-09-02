const { execSync } = require('child_process');
const fs = require('fs');

const orig = execSync('git show origin/main:index.html', { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024 });

const introMatch = orig.match(/<section[^>]*class=["']intro u-theme-dark["'][^>]*>[\s\S]*?<\/section>/);
if (!introMatch) {
  console.log("Could not find intro section in origin/main");
  process.exit(1);
}

const introSection = introMatch[0];
console.log("Found intro section from origin/main! Length:", introSection.length);

const targets = ['index.html', 'public/index.html', 'public/showcase/index.html'];

targets.forEach(t => {
  if (!fs.existsSync(t)) return;
  let html = fs.readFileSync(t, 'utf8');

  // Check if intro is already present
  if (html.includes('class="intro u-theme-dark"') || html.includes("class='intro u-theme-dark'")) {
    console.log("Intro already present in:", t);
    return;
  }

  // Insert before <section ... class="service
  const serviceRegex = /(<section[^>]*class=["'][^"']*service[^"']*["'][^>]*>)/;
  if (serviceRegex.test(html)) {
    html = html.replace(serviceRegex, introSection + '\n' + '$1');
    fs.writeFileSync(t, html, 'utf8');
    console.log("Restored intro section in:", t);
  } else {
    console.log("Could not find service section in:", t);
  }
});
