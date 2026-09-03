/**
 * RAKEXURA Fast Static Asset & Mirror Sync
 * 
 * Direct editing workflow:
 * Edit your code files (index.html, styles.css, pricing.html, etc.) directly.
 * This script runs on build/deploy to cleanly copy source files into `public/` in < 50ms.
 */

const fs = require('fs');
const path = require('path');

console.log('====================================================');
console.log('  RAKEXURA DIRECT BUILD & MIRROR SYNC');
console.log('====================================================\n');

const startTime = Date.now();

function copyFile(src, dest) {
  if (!fs.existsSync(src)) return;
  const destDir = path.dirname(dest);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  fs.copyFileSync(src, dest);
  console.log(`✓ Copied ${path.relative('.', src)} -> ${path.relative('.', dest)}`);
}

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.git') {
        copyDir(srcPath, destPath);
      }
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 1. Root files to sync into public/
const coreFiles = [
  'styles.css',
  'index.html',
  'pricing.html',
  'support.html',
  'validation.html',
  'track.html',
  'manage.html',
  'terms.html',
  'privacy.html',
  'imprint.html',
  'favicon.ico',
  'sw.js'
];

coreFiles.forEach(file => {
  if (fs.existsSync(file)) {
    copyFile(file, path.join('public', file));
  }
});

// 2. Subfolder mirrors (e.g. pricing/index.html from pricing.html)
const pageRoutes = [
  { source: 'pricing.html', route: 'pricing' },
  { source: 'support.html', route: 'support' },
  { source: 'validation.html', route: 'validation' },
  { source: 'track.html', route: 'track' },
  { source: 'manage.html', route: 'manage' }
];

pageRoutes.forEach(({ source, route }) => {
  if (fs.existsSync(source)) {
    copyFile(source, path.join(route, 'index.html'));
    copyFile(source, path.join('public', route, 'index.html'));
  }
});

// 3. Asset and script folders
copyDir('assets', 'public/assets');
if (fs.existsSync('scripts/app.js')) {
  copyFile('scripts/app.js', 'public/scripts/app.js');
}

// 4. Showcase mirror (if used)
if (fs.existsSync('public/showcase')) {
  copyFile('styles.css', 'public/showcase/styles.css');
  coreFiles.filter(f => f.endsWith('.html')).forEach(file => {
    if (fs.existsSync(file)) {
      copyFile(file, path.join('public/showcase', file));
    }
  });
  pageRoutes.forEach(({ source, route }) => {
    if (fs.existsSync(source)) {
      copyFile(source, path.join('public/showcase', route, 'index.html'));
    }
  });
  copyDir('assets', 'public/showcase/assets');
}

const elapsed = Date.now() - startTime;
console.log(`\n====================================================`);
console.log(`  BUILD SYNC COMPLETED IN ${elapsed}ms!`);
console.log(`  Direct code editing is now active.`);
console.log(`====================================================`);
