const fs = require('fs');

const cssFiles = ['styles.css', 'public/styles.css', 'public/showcase/styles.css'];

const supportCss = `
/* Support Hero Compact Layout */
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
`;

cssFiles.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');

  // Remove if already present
  if (content.includes('/* Support Hero Compact Layout */')) {
    content = content.replace(/\/\* Support Hero Compact Layout \*\/[\s\S]*?\.support-action-bar\s*\{[^}]*\}/g, '');
  }

  // Insert right after pricing-compare-section
  const target = '.pricing-compare-section td[style*="color:#888888"] {\n  color: #71717a !important;\n}';
  if (content.includes(target)) {
    content = content.replace(target, `${target}\n\n${supportCss.trim()}`);
    console.log(`Inserted support CSS after comparison table in ${file}`);
  } else {
    // Fallback: insert before dark theme block
    const darkBlock = '/* ==========================================================================\n   RAKEXURA HARMONIOUS CYBER DARK THEME';
    content = content.replace(darkBlock, `${supportCss.trim()}\n\n${darkBlock}`);
    console.log(`Inserted support CSS before dark theme in ${file}`);
  }

  fs.writeFileSync(file, content, 'utf8');
});
console.log("All CSS files updated successfully!");
