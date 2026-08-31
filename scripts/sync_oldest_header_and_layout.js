const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 1. Clean styles.css by trimming custom overrides starting from line 5074
['styles.css', 'public/styles.css', 'public/showcase/styles.css'].forEach(cssPath => {
  if (!fs.existsSync(cssPath)) return;
  let css = fs.readFileSync(cssPath, 'utf8');
  const cutIndex = css.indexOf('/* Optical Centering for header text without breaking translate */');
  if (cutIndex !== -1) {
    css = css.substring(0, cutIndex).trimEnd() + '\n';
    fs.writeFileSync(cssPath, css, 'utf8');
    console.log("Cleaned styles in:", cssPath);
  }
});

// 2. Original Header HTML structure
const originalHeader = `<header data-site-header="true" class="header">
    <div class="header_inner">
      <div class="header_title">
        <div class="header_title-inner u-c1">
          <a href="/" aria-current="page" class="header_title-link w-inline-block w--current">
            <div data-button-hover="" class="header_title-profile">
              <img src="/assets/favicon.png" loading="eager" width="32" height="32" alt="RAKEXURA Subscriptions" fetchpriority="high" class="header_title-profile-img">
            </div>
            <div data-button-hover="" class="header_title-button">
              <div class="header_title-logo">
                <span style="--index: 0;" class="header_title-logo-text">RAKE</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" aria-hidden="true" style="--index: 1;" class="icon">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9 5H11V7H13V9H15V11H13V13H11V15H9V13H7V11H5V9H7V7H9V5Z" fill="currentColor"></path>
                </svg>
                <span style="--index: 2;" data-button-hover-animation="" class="header_title-logo-text">XURA</span>
              </div>
              <div class="header_title-bg"></div>
            </div>
          </a>
        </div>
      </div>
      <nav class="header_nav">
        <ul role="list" class="header_nav-list w-list-unstyled">
          <li class="header_nav-list-item">
            <a data-nav-link="" data-text="Subscriptions" data-swup-preload="" data-wf--header-button--variant="base" href="/" class="header_nav-button u-c1 w-inline-block w--current is-active">
              <span class="header_nav-button-inner">
                <span class="header_nav-button-text">Subscriptions</span>
                <span class="header_nav-button-bg"></span>
              </span>
            </a>
          </li>
          <li class="header_nav-list-item">
            <a data-nav-link="" data-text="Validation" data-swup-preload="" data-wf--header-button--variant="base" href="/validation" class="header_nav-button u-c1 w-inline-block">
              <span class="header_nav-button-inner">
                <span class="header_nav-button-text">Validation</span>
                <span class="header_nav-button-bg"></span>
              </span>
            </a>
          </li>
          <li class="header_nav-list-item">
            <a data-nav-link="" data-text="Pricing" data-swup-preload="" data-wf--header-button--variant="base" href="/pricing" class="header_nav-button u-c1 w-inline-block">
              <span class="header_nav-button-inner">
                <span class="header_nav-button-text">Pricing</span>
                <span class="header_nav-button-bg"></span>
              </span>
            </a>
          </li>
          <li class="header_nav-list-item">
            <a data-nav-link="" data-text="Support" data-swup-preload="" data-wf--header-button--variant="base" href="/support" class="header_nav-button u-c1 w-inline-block">
              <span class="header_nav-button-inner">
                <span class="header_nav-button-text">Support</span>
                <span class="header_nav-button-bg"></span>
              </span>
            </a>
          </li>
          <li class="header_nav-list-item">
            <a data-nav-link="" data-text="Track" data-wf--header-button--variant="base" href="/track" class="header_nav-button u-c1 w-inline-block">
              <span class="header_nav-button-inner">
                <span class="header_nav-button-text">Track</span>
                <span class="header_nav-button-bg"></span>
              </span>
            </a>
          </li>
        </ul>
      </nav>
      <div aria-hidden="true" class="header_tools" style="display:flex; align-items:center; gap:6px;">
        <a data-text="2026" role="link" aria-disabled="true" class="header_nav-button u-c1">
          <span class="header_nav-button-inner">
            <span class="header_nav-button-text">
              <span class="header_nav-button-text-span">Feed</span>
            </span>
            <span class="header_nav-button-bg"></span>
          </span>
        </a>
        <button type="button" class="header_nav-button u-c1 theme-box-toggle-btn" onclick="window.toggleRakexuraTheme()" style="background: transparent; border: none; padding: 0; cursor: pointer; text-decoration: none; display: inline-flex;">
          <span class="header_nav-button-inner">
            <span class="header_nav-button-text theme-toggle-label" style="display: inline-flex; align-items: center; justify-content: center; gap: 3px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle; margin-right:3px;"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg><span>Dark</span>
            </span>
            <span class="header_nav-button-bg"></span>
          </span>
        </button>
      </div>
      <button type="button" data-menu-toggle="" class="header_menu-button">
        <span class="header_menu-button-text u-c1">Menu</span>
        <span class="header_menu-button-bg"></span>
      </button>
    </div>
  </header>`;

// 3. Extract Section 3 and script from 18d534f
const oldHtml = execSync('git show 18d534f:index.html', { maxBuffer: 15*1024*1024 }).toString('utf8');
const section3Match = oldHtml.match(/<section id="pricing-matrix"[\s\S]*?<\/section>/);
const authenticPricingMatrix = section3Match ? section3Match[0] : '';
const scriptMatch = oldHtml.match(/<script>\s*\(function\(\)\s*\{\s*const HOME_RATES[\s\S]*?<\/script>/);
const authenticScript = scriptMatch ? scriptMatch[0] : '';

// 4. Update all HTML files
function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === '.next' || entry.name === '.git') continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDirectory(fullPath);
    } else if (entry.name.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf8');

      // Replace header with authentic original header
      content = content.replace(/<header[\s\S]*?<\/header>/, originalHeader);

      // Remove any leftover header optical overrides
      content = content.replace(/<style id="rakexura-header-optical-center">[\s\S]*?<\/style>/g, '');

      // For index.html, ensure Section 3 is placed right before Section 4 (next-page / validation)
      if (entry.name === 'index.html' && authenticPricingMatrix) {
        content = content.replace(/<main id="main"[\s\S]*?<\/main>/g, '');
        content = content.replace(/<section id="pricing-matrix"[\s\S]*?<\/section>/g, '');

        if (content.includes('class="next-page"') || content.includes('data-next-page')) {
          content = content.replace(/(<section[^>]*class="[^"]*next-page)/, authenticPricingMatrix + '\n\n$1');
        }

        if (!content.includes('const HOME_RATES') && authenticScript) {
          content = content.replace('</body>', authenticScript + '\n</body>');
        }
      }

      fs.writeFileSync(fullPath, content, 'utf8');
      console.log("Processed:", fullPath);
    }
  }
}

processDirectory('.');
console.log("Finished restoring authentic oldest design and plans matrix placement!");
