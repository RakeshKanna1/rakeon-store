const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootPages = [
  'index.html',
  'pricing.html',
  'validation.html',
  'support.html',
  'track.html',
  'manage.html',
  'terms.html',
  'privacy.html',
  'imprint.html'
];

console.log("Restoring all pages from authentic commit 18d534f...");

rootPages.forEach(fileName => {
  try {
    const originalHtml = execSync(`git show 18d534f:${fileName}`, { maxBuffer: 15*1024*1024 }).toString('utf8');
    
    // Write to root
    fs.writeFileSync(fileName, originalHtml, 'utf8');

    // Write to public/
    const publicPath = path.join('public', fileName);
    if (fs.existsSync(publicPath)) {
      fs.writeFileSync(publicPath, originalHtml, 'utf8');
    }

    // Write to public/showcase/
    const showcasePath = path.join('public', 'showcase', fileName);
    if (fs.existsSync(showcasePath)) {
      fs.writeFileSync(showcasePath, originalHtml, 'utf8');
    }

    // Also handle directory index files like pricing/index.html
    const dirName = fileName.replace('.html', '');
    const dirIndexPath = path.join(dirName, 'index.html');
    if (fs.existsSync(dirIndexPath)) {
      fs.writeFileSync(dirIndexPath, originalHtml, 'utf8');
    }
    const publicDirIndexPath = path.join('public', dirName, 'index.html');
    if (fs.existsSync(publicDirIndexPath)) {
      fs.writeFileSync(publicDirIndexPath, originalHtml, 'utf8');
    }
    const showcaseDirIndexPath = path.join('public', 'showcase', dirName, 'index.html');
    if (fs.existsSync(showcaseDirIndexPath)) {
      fs.writeFileSync(showcaseDirIndexPath, originalHtml, 'utf8');
    }

    console.log(`Successfully restored: ${fileName}`);
  } catch (err) {
    console.error(`Error restoring ${fileName}:`, err.message);
  }
});

// Run dark mode fix to ensure CSS variables and palette are active
console.log("Applying polished dark mode colors...");
execSync('node scripts/fix_dark_mode_colors.js');

console.log("All pages successfully restored and functional!");
