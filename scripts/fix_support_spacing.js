const fs = require('fs');
const path = require('path');

const targetFiles = [
  'support.html',
  'public/support.html',
  'support/index.html',
  'public/support/index.html',
  'public/showcase/support.html',
  'public/showcase/support/index.html'
];

const cssOverride = `
<style id="support-compact-spacing-fix">
  /* Fix excessive whitespace in support hero */
  .hero-contact {
    min-height: calc(100svh - var(--header-height)) !important;
  }
  .hero-contact_content {
    padding-top: 1.5rem !important;
    grid-gap: 2.25rem !important;
    align-content: start !important;
  }
  .hero-contact_action-group {
    display: flex !important;
    flex-direction: column !important;
    gap: 1.15rem !important;
    align-items: flex-start !important;
  }
  .hero-contact_description {
    margin: 0 !important;
    line-height: 1.35 !important;
  }
  .support-action-bar {
    display: flex !important;
    flex-wrap: wrap !important;
    gap: 12px !important;
    align-items: center !important;
    margin-top: 0 !important;
  }
</style>
`;

targetFiles.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');

  // 1. Inject or update CSS override in <head>
  if (content.includes('id="support-compact-spacing-fix"')) {
    content = content.replace(/<style id="support-compact-spacing-fix">[\s\S]*?<\/style>/, cssOverride.trim());
  } else {
    content = content.replace('</head>', `${cssOverride}\n</head>`);
  }

  // 2. Wrap paragraph and action bar in .hero-contact_action-group
  // Pattern to find:
  // <div class="hero-contact_content"><p class="hero-contact_description u-h3">...<div class="support-action-bar">...</div>
  const matchRegex = /<div class="hero-contact_content">\s*<p class="hero-contact_description u-h3">([\s\S]*?)<\/p>\s*<div class="support-action-bar">([\s\S]*?)<\/div>\s*<div data-copy-clipboard=""/m;
  
  if (matchRegex.test(content)) {
    content = content.replace(matchRegex, (match, pInner, btnInner) => {
      return `<div class="hero-contact_content">
  <div class="hero-contact_action-group">
    <p class="hero-contact_description u-h3">${pInner.trim()}
    </p>
    <div class="support-action-bar">
      ${btnInner.trim()}
    </div>
  </div>
  <div data-copy-clipboard=""`;
    });
    console.log(`Updated HTML structure in ${file}`);
  } else {
    // Check if already wrapped
    if (content.includes('hero-contact_action-group')) {
      console.log(`Already has action-group in ${file}`);
    } else {
      console.warn(`Could not match hero-contact_content regex in ${file}`);
    }
  }

  fs.writeFileSync(file, content, 'utf8');
  console.log(`Saved ${file}`);
});
console.log("Done updating support spacing!");
