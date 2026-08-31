const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 1. Extract the authentic Section 3 (Pricing Matrix) and its styles and script from 18d534f
const oldHtml = execSync('git show 18d534f:index.html', { maxBuffer: 15*1024*1024 }).toString('utf8');

const section3Match = oldHtml.match(/<section id="pricing-matrix"[\s\S]*?<\/section>/);
if (!section3Match) {
  console.error("Could not extract pricing matrix section from 18d534f");
  process.exit(1);
}
const authenticPricingMatrix = section3Match[0];

// Extract pricing matrix style
const styleMatch = oldHtml.match(/<style id="rakexura-scoped-refinements">[\s\S]*?<\/style>/);
const authenticStyle = styleMatch ? styleMatch[0] : '';

// Extract pricing script
const scriptMatch = oldHtml.match(/<script id="rakexura-home-pricing-script">[\s\S]*?<\/script>/) ||
                    oldHtml.match(/<script>\s*\(function\(\)\s*\{\s*const HOME_RATES[\s\S]*?<\/script>/);
const authenticScript = scriptMatch ? scriptMatch[0] : '';

console.log("Extracted authentic pricing matrix (length: " + authenticPricingMatrix.length + ")");

// 2. The clean, authentic header HTML
const authenticHeader = `<header data-site-header="true" class="header">
    <div class="header_inner">
      <div class="header_title">
        <div class="header_title-inner u-c1">
          <a href="/" aria-current="page" class="header_title-link w-inline-block w--current">
            <div data-button-hover="" class="header_title-profile">
              <img src="/assets/favicon.png" loading="eager" width="32" height="32" alt="RAKEXURA Subscriptions" fetchpriority="high" class="header_title-profile-img" style="border-radius:50%;object-fit:cover;background:#0c0a1a;">
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

// Clean Optical Centering Style (without breaking Webflow's native header button & profile avatar GSAP engine)
const cleanOpticalStyle = `
<style id="rakexura-header-optical-center">
  /* Optical Vertical Centering for Header Words without overriding Webflow button backgrounds */
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

  .header_menu-button-text {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    line-height: 1 !important;
    transform: translateY(-1.5px) !important;
  }
</style>
`;

// 3. Process all index.html files
const targetIndexFiles = [
  'index.html',
  'public/index.html',
  'public/showcase/index.html'
];

targetIndexFiles.forEach(filePath => {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace header with authentic header
  content = content.replace(/<header[\s\S]*?<\/header>/, authenticHeader);

  // Replace optical style with clean non-conflicting optical style
  if (content.includes('id="rakexura-header-optical-center"')) {
    content = content.replace(/<style id="rakexura-header-optical-center">[\s\S]*?<\/style>/, cleanOpticalStyle.trim());
  }

  // Ensure Section 3 (Pricing Matrix) is placed before Section 4 (Next Page: Validation)
  if (content.includes('class="next-page"') || content.includes('data-next-page')) {
    // Remove existing pricing-matrix or <main ... </main> if present
    content = content.replace(/<main id="main"[\s\S]*?<\/main>/, '');
    content = content.replace(/<section id="pricing-matrix"[\s\S]*?<\/section>/, '');

    // Insert authenticPricingMatrix right before <section ... class="next-page"
    content = content.replace(/(<section[^>]*class="[^"]*next-page)/, authenticPricingMatrix + '\n\n$1');
  }

  // Ensure authentic home pricing script is present
  if (!content.includes('HOME_RATES') && authenticScript) {
    content = content.replace('</body>', authenticScript + '\n</body>');
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log("Restored authentic layout & header on:", filePath);
});

// 4. Update all other HTML files to have clean header optical style without breaking Webflow buttons
function processOtherPages(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === '.next' || entry.name === '.git') continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processOtherPages(fullPath);
    } else if (entry.name.endsWith('.html') && !entry.name.includes('index.html')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('id="rakexura-header-optical-center"')) {
        content = content.replace(/<style id="rakexura-header-optical-center">[\s\S]*?<\/style>/, cleanOpticalStyle.trim());
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log("Updated optical header on:", fullPath);
      }
    }
  }
}

processOtherPages('.');
console.log("Layout and Header restored to 100% authentic design!");
