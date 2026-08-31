const fs = require('fs');
const path = require('path');

const targetRule = `  .header_title-button,
  .header_title-logo {
    display: inline-flex !important;
    align-items: center !important;
    color: #111111 !important;
  }

  .header_title-logo-text {
    line-height: 1 !important;
    transform: translateY(-1px) !important;
    color: #111111 !important;
    font-weight: 800 !important;
  }

  .header_title-logo svg,
  .header_title-logo .icon,
  .header_title-logo svg path {
    color: #111111 !important;
    fill: #111111 !important;
  }

  html.dark-theme .header_title-button,
  html.dark-theme .header_title-logo,
  html.dark-theme .header_title-logo-text,
  body.dark-theme .header_title-button,
  body.dark-theme .header_title-logo,
  body.dark-theme .header_title-logo-text,
  [data-theme="dark"] .header_title-button,
  [data-theme="dark"] .header_title-logo,
  [data-theme="dark"] .header_title-logo-text {
    color: #f2efeb !important;
  }

  html.dark-theme .header_title-logo svg,
  html.dark-theme .header_title-logo .icon,
  html.dark-theme .header_title-logo svg path,
  body.dark-theme .header_title-logo svg,
  body.dark-theme .header_title-logo .icon,
  body.dark-theme .header_title-logo svg path,
  [data-theme="dark"] .header_title-logo svg,
  [data-theme="dark"] .header_title-logo .icon,
  [data-theme="dark"] .header_title-logo svg path {
    color: #f2efeb !important;
    fill: #f2efeb !important;
  }`;

const oldSnippet = `  .header_title-button,
  .header_title-logo {
    display: inline-flex !important;
    align-items: center !important;
  }

  .header_title-logo-text {
    line-height: 1 !important;
    transform: translateY(-1px) !important;
  }`;

function processDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === '.next' || entry.name === '.git') continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDir(fullPath);
    } else if (entry.name.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes(oldSnippet)) {
        content = content.replace(oldSnippet, targetRule);
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Updated HTML:', fullPath);
      }
    } else if (entry.name.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (!content.includes('.header_title-logo-text')) {
        content += '\n\n' + targetRule + '\n';
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Updated CSS:', fullPath);
      }
    }
  }
}

processDir('.');
console.log('Finished updating header logo text color!');
