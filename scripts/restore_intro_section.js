const { execSync } = require('child_process');
const fs = require('fs');

// 1. Try to find an existing intro section from targets already on disk
let introSection = null;
const targets = ['index.html', 'public/index.html', 'public/showcase/index.html'];

for (const t of targets) {
  if (fs.existsSync(t)) {
    const html = fs.readFileSync(t, 'utf8');
    const match = html.match(/<section[^>]*class=["']intro u-theme-dark["'][^>]*>[\s\S]*?<\/section>/);
    if (match) {
      introSection = match[0];
      console.log(`Found authentic intro section from local ${t}! (Length: ${introSection.length})`);
      break;
    }
  }
}

// 2. Fallback to git refs if not found on disk (supporting shallow clones in CI like Vercel)
if (!introSection) {
  const gitRefs = ['HEAD:index.html', 'origin/main:index.html', 'main:index.html'];
  for (const ref of gitRefs) {
    try {
      const orig = execSync(`git show ${ref}`, { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024 });
      const match = orig.match(/<section[^>]*class=["']intro u-theme-dark["'][^>]*>[\s\S]*?<\/section>/);
      if (match) {
        introSection = match[0];
        console.log(`Found authentic intro section from git ${ref}! (Length: ${introSection.length})`);
        break;
      }
    } catch (e) {
      // Ignore git ref errors in CI shallow clones
    }
  }
}

if (!introSection) {
  console.log("Intro section not found in local files or git history; skipping restoration.");
  process.exit(0);
}

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
