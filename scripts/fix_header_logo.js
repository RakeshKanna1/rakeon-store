const fs = require('fs');
const path = require('path');

const premiumHeaderCSS = `
<style id="rakexura-header-optical-center">
  /* Optical Vertical Centering for Header Words */
  .header_nav-button-inner {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    height: 100% !important;
  }

  .header_nav-button-text,
  .header_nav-button-text-span,
  .header_nav-button-text-touch {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    line-height: 1 !important;
    transform: translateY(-1.5px) !important;
  }

  /* Header Title Link Container */
  .header_title-link {
    display: inline-flex !important;
    align-items: center !important;
    gap: 8px !important;
    text-decoration: none !important;
    cursor: pointer !important;
  }

  /* 1. Animated Profile Logo Picture */
  .header_title-profile {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: 34px !important;
    height: 34px !important;
    border-radius: 50% !important;
    overflow: hidden !important;
    background: #0c0a1a !important;
    border: 1.5px solid rgba(0, 0, 0, 0.12) !important;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08) !important;
    transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease !important;
    flex-shrink: 0 !important;
  }

  .header_title-profile-img {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    display: block !important;
    border-radius: 50% !important;
    transition: transform 0.35s ease !important;
  }

  .header_title-link:hover .header_title-profile {
    transform: scale(1.1) rotate(-4deg) !important;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.18) !important;
    border-color: #000000 !important;
  }

  .header_title-link:hover .header_title-profile-img {
    transform: scale(1.08) !important;
  }

  /* 2. Premium Black Pill Box for RAKE ✦ XURA */
  .header_title-button {
    position: relative !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    padding: 0 16px !important;
    height: 34px !important;
    min-height: 34px !important;
    border-radius: 9999px !important;
    background: #000000 !important;
    color: #ffffff !important;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12) !important;
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.25s ease, box-shadow 0.3s ease !important;
  }

  .header_title-link:hover .header_title-button {
    transform: translateY(-1px) scale(1.03) !important;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.22) !important;
    background: #111111 !important;
  }

  .header_title-logo {
    display: inline-flex !important;
    align-items: center !important;
    gap: 6px !important;
    position: relative !important;
    z-index: 2 !important;
    color: #ffffff !important;
  }

  .header_title-logo-text {
    font-family: inherit !important;
    font-size: 11.5px !important;
    font-weight: 900 !important;
    letter-spacing: 0.08em !important;
    text-transform: uppercase !important;
    line-height: 1 !important;
    color: #ffffff !important;
    transform: translateY(-0.5px) !important;
  }

  .header_title-logo svg,
  .header_title-logo .icon,
  .header_title-logo svg path {
    width: 12px !important;
    height: 12px !important;
    color: #ff5b1a !important;
    fill: #ff5b1a !important;
    display: inline-block !important;
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
  }

  .header_title-link:hover .header_title-logo svg {
    transform: rotate(90deg) scale(1.15) !important;
  }

  /* 3. Dark Theme Mode */
  html.dark-theme .header_title-profile,
  body.dark-theme .header_title-profile,
  [data-theme="dark"] .header_title-profile {
    border-color: rgba(255, 255, 255, 0.2) !important;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5) !important;
  }

  html.dark-theme .header_title-button,
  body.dark-theme .header_title-button,
  [data-theme="dark"] .header_title-button {
    background: #16132b !important;
    border: 1px solid rgba(255, 255, 255, 0.15) !important;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4) !important;
  }

  html.dark-theme .header_title-link:hover .header_title-button,
  body.dark-theme .header_title-link:hover .header_title-button,
  [data-theme="dark"] .header_title-link:hover .header_title-button {
    background: #201b3d !important;
    border-color: rgba(255, 91, 26, 0.6) !important;
    box-shadow: 0 4px 18px rgba(255, 91, 26, 0.25) !important;
  }

  .header_menu-button-text {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    line-height: 1 !important;
    transform: translateY(-1.5px) !important;
  }
</style>
`;

function processDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === '.next' || entry.name === '.git') continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDir(fullPath);
    } else if (entry.name.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('id="rakexura-header-optical-center"')) {
        content = content.replace(/<style id="rakexura-header-optical-center">[\s\S]*?<\/style>/, premiumHeaderCSS.trim());
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Updated HTML:', fullPath);
      }
    }
  }
}

processDir('.');
console.log('Finished updating premium header logo pill & hover animations!');
