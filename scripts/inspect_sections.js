const { execSync } = require('child_process');
const html = execSync('git show 18d534f:index.html', { maxBuffer: 15*1024*1024 }).toString('utf8');

// Find all style tags or scripts relating to pricing-matrix in 18d534f:index.html
const styles = html.match(/<style[\s\S]*?<\/style>/g);
if (styles) {
  styles.forEach((s, idx) => {
    if (s.includes('home-pricing') || s.includes('duration-btn') || s.includes('pricing-matrix')) {
      console.log(`=== STYLE ${idx} ===`);
      console.log(s);
    }
  });
}

const scripts = html.match(/<script[\s\S]*?<\/script>/g);
if (scripts) {
  scripts.forEach((s, idx) => {
    if (s.includes('switchHomeDuration') || s.includes('home-pricing') || s.includes('RATES')) {
      console.log(`=== SCRIPT ${idx} ===`);
      console.log(s);
    }
  });
}
