const fs = require('fs');
const path = require('path');

const menuDialogMarkup = `
<!-- Fullscreen Responsive Cyber Menu Drawer -->
<dialog data-menu-dialog="" data-lenis-prevent="" class="menu" style="background-color: #0c0a18; color: #f4f4f8; margin: 0; padding: 0; border: none; width: 100vw; height: 100vh; max-width: 100vw; max-height: 100vh;">
  <div data-menu-backdrop="" data-menu-close="" class="menu_backdrop" style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(12, 10, 24, 0.85); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); z-index: 0;"></div>
  
  <div class="menu_outer" style="position: relative; z-index: 10; display: flex; flex-direction: column; justify-content: space-between; height: 100%; width: 100%; box-sizing: border-box; padding: 1.5rem 1.25rem; background: #0c0a18;">
    <!-- Top Header inside Menu -->
    <div class="menu_header" style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
      <a href="/" class="menu_title w-inline-block" style="text-decoration: none;">
        <div style="display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; background: #17142b; border: 1.5px solid rgba(255, 255, 255, 0.18); border-radius: 999px; font-family: monospace; font-size: 11.5px; font-weight: 800; color: #ffffff;">
          <span>RAKE</span>
          <span style="color: #f2c744;">&#9670;</span>
          <span>XURA</span>
        </div>
      </a>
      <button type="button" data-menu-close="" aria-label="Close menu" class="menu_close-button" style="background: #17142b; border: 1.5px solid rgba(255, 255, 255, 0.18); border-radius: 999px; padding: 6px 14px; font-family: monospace; font-size: 11px; font-weight: 800; color: #ffffff; cursor: pointer;">
        CLOSE &times;
      </button>
    </div>

    <!-- Navigation Routes -->
    <nav class="menu_nav" style="display: flex; flex-direction: column; gap: 0.65rem; margin: auto 0; padding: 1rem 0; width: 100%;">
      <a href="/" class="menu_nav-item" style="font-size: 1.35rem; font-weight: 900; color: #ffffff; text-decoration: none; text-transform: uppercase; font-family: monospace; padding: 0.75rem 0.5rem; border-bottom: 1px solid rgba(255, 255, 255, 0.08); display: flex; justify-content: space-between; align-items: center; transition: color 0.15s;">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <span style="font-size: 11px; color: #f2c744; font-weight: 800; background: #17142b; border: 1px solid rgba(242, 199, 68, 0.3); padding: 2px 6px; border-radius: 4px;">01</span>
          <span>Subscriptions</span>
        </div>
        <span style="color: #71717a; font-size: 14px;">&rarr;</span>
      </a>
      <a href="/pricing" class="menu_nav-item" style="font-size: 1.35rem; font-weight: 900; color: #ffffff; text-decoration: none; text-transform: uppercase; font-family: monospace; padding: 0.75rem 0.5rem; border-bottom: 1px solid rgba(255, 255, 255, 0.08); display: flex; justify-content: space-between; align-items: center; transition: color 0.15s;">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <span style="font-size: 11px; color: #f2c744; font-weight: 800; background: #17142b; border: 1px solid rgba(242, 199, 68, 0.3); padding: 2px 6px; border-radius: 4px;">02</span>
          <span>Pricing Matrix</span>
        </div>
        <span style="color: #71717a; font-size: 14px;">&rarr;</span>
      </a>
      <a href="/validation" class="menu_nav-item" style="font-size: 1.35rem; font-weight: 900; color: #ffffff; text-decoration: none; text-transform: uppercase; font-family: monospace; padding: 0.75rem 0.5rem; border-bottom: 1px solid rgba(255, 255, 255, 0.08); display: flex; justify-content: space-between; align-items: center; transition: color 0.15s;">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <span style="font-size: 11px; color: #f2c744; font-weight: 800; background: #17142b; border: 1px solid rgba(242, 199, 68, 0.3); padding: 2px 6px; border-radius: 4px;">03</span>
          <span>Slot Validation</span>
        </div>
        <span style="color: #71717a; font-size: 14px;">&rarr;</span>
      </a>
      <a href="/track" class="menu_nav-item" style="font-size: 1.35rem; font-weight: 900; color: #ffffff; text-decoration: none; text-transform: uppercase; font-family: monospace; padding: 0.75rem 0.5rem; border-bottom: 1px solid rgba(255, 255, 255, 0.08); display: flex; justify-content: space-between; align-items: center; transition: color 0.15s;">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <span style="font-size: 11px; color: #f2c744; font-weight: 800; background: #17142b; border: 1px solid rgba(242, 199, 68, 0.3); padding: 2px 6px; border-radius: 4px;">04</span>
          <span>Track Telemetry</span>
        </div>
        <span style="color: #71717a; font-size: 14px;">&rarr;</span>
      </a>
      <a href="/support" class="menu_nav-item" style="font-size: 1.35rem; font-weight: 900; color: #ffffff; text-decoration: none; text-transform: uppercase; font-family: monospace; padding: 0.75rem 0.5rem; border-bottom: 1px solid rgba(255, 255, 255, 0.08); display: flex; justify-content: space-between; align-items: center; transition: color 0.15s;">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <span style="font-size: 11px; color: #f2c744; font-weight: 800; background: #17142b; border: 1px solid rgba(242, 199, 68, 0.3); padding: 2px 6px; border-radius: 4px;">05</span>
          <span>24/7 VIP Support</span>
        </div>
        <span style="color: #71717a; font-size: 14px;">&rarr;</span>
      </a>
      <a href="https://rakexura-store.vercel.app" target="_blank" class="menu_nav-item" style="font-size: 1.35rem; font-weight: 900; color: #f2c744; text-decoration: none; text-transform: uppercase; font-family: monospace; padding: 0.75rem 0.5rem; display: flex; justify-content: space-between; align-items: center; transition: color 0.15s;">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <span style="font-size: 11px; color: #18181b; font-weight: 900; background: #f2c744; padding: 2px 6px; border-radius: 4px;">&#9733;</span>
          <span>Official Store</span>
        </div>
        <span style="color: #f2c744; font-size: 14px;">&rarr;</span>
      </a>
    </nav>

    <!-- Footer inside Menu -->
    <div class="menu_footer" style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 1rem; font-family: monospace; font-size: 11px; color: #71717a; width: 100%;">
      <div>&copy; 2026 RAKEXURA</div>
      <div style="color: #f2c744; font-weight: 800;">WARP SPEED DISPATCH</div>
    </div>
  </div>
</dialog>
`;

const menuControllerScript = `
<script id="bulletproof-menu-controller">
  (function() {
    function getDialog() {
      return document.querySelector('[data-menu-dialog], dialog.menu');
    }

    function openMenu() {
      var dialog = getDialog();
      if (!dialog) return;
      try {
        if (!dialog.open && typeof dialog.showModal === 'function') {
          dialog.showModal();
        } else {
          dialog.setAttribute('open', '');
        }
      } catch (e) {
        dialog.setAttribute('open', '');
      }
      dialog.classList.add('is-open');
      dialog.style.display = 'block';
      dialog.style.visibility = 'visible';
      dialog.style.opacity = '1';
      document.documentElement.classList.add('has-menu-open');
      if (document.body) { document.body.style.overflow = 'hidden'; }
    }

    function closeMenu() {
      var dialog = getDialog();
      if (!dialog) return;
      try {
        if (dialog.open && typeof dialog.close === 'function') {
          dialog.close();
        } else {
          dialog.removeAttribute('open');
        }
      } catch (e) {
        dialog.removeAttribute('open');
      }
      dialog.classList.remove('is-open');
      dialog.style.display = 'none';
      dialog.style.visibility = 'hidden';
      document.documentElement.classList.remove('has-menu-open');
      if (document.body) { document.body.style.overflow = ''; }
    }

    // Global Document Event Delegation for clicks and touches
    document.addEventListener('click', function(e) {
      // 1. Check if Menu Toggle clicked
      var toggleBtn = e.target.closest('[data-menu-toggle], .header_menu-button, .button-menu');
      if (toggleBtn) {
        e.preventDefault();
        e.stopPropagation();
        var dialog = getDialog();
        if (dialog && (dialog.open || dialog.classList.contains('is-open'))) {
          closeMenu();
        } else {
          openMenu();
        }
        return;
      }

      // 2. Check if Close Button or Backdrop clicked
      var closeBtn = e.target.closest('[data-menu-close], .menu_close-button, [data-menu-backdrop], .menu_backdrop');
      if (closeBtn) {
        e.preventDefault();
        closeMenu();
        return;
      }

      // 3. Check if Menu Nav Link clicked
      var navLink = e.target.closest('.menu_nav-item, .menu_nav a, .menu a');
      if (navLink) {
        closeMenu();
      }
    }, true);

    // Escape key handling
    window.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        var dialog = getDialog();
        if (dialog && (dialog.open || dialog.classList.contains('is-open'))) {
          closeMenu();
        }
      }
    });

    // Global hooks
    window.rakexuraOpenMenu = openMenu;
    window.rakexuraCloseMenu = closeMenu;
  })();
</script>
`;

const menuButtonMarkup = `
<button type="button" data-menu-toggle="" aria-label="Open menu" class="header_menu-button"><span class="header_menu-button-text u-c1">Menu</span><span class="header_menu-button-bg"></span></button>
`;

function getAllHtmlFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (file === 'node_modules' || file === '.git' || file === '.next') continue;
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getAllHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const htmlFiles = getAllHtmlFiles(process.cwd());

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let modified = false;

  // 1. Ensure header contains menu button
  if (content.includes('class="header_inner"') || content.includes("class='header_inner'")) {
    if (!content.includes('header_menu-button') && !content.includes('data-menu-toggle')) {
      content = content.replace(/(<div[^>]*class=["']header_inner["'][^>]*>[\s\S]*?)(<\/div>\s*<\/header>)/, '$1 ' + menuButtonMarkup + ' $2');
      modified = true;
    }
  }

  // 2. Replace any existing <dialog> or insert new <dialog> before </body>
  content = content.replace(/(?:<!-- Fullscreen Responsive Cyber Menu Drawer -->\s*)+/g, '');
  if (content.includes('<dialog')) {
    content = content.replace(/<dialog[\s\S]*?<\/dialog>/, menuDialogMarkup.trim());
    modified = true;
  } else {
    content = content.replace('</body>', menuDialogMarkup.trim() + '\n</body>');
    modified = true;
  }

  // 3. Ensure bulletproof-menu-controller script is present and updated
  if (content.includes('<script id="bulletproof-menu-controller">')) {
    content = content.replace(/<script id="bulletproof-menu-controller">[\s\S]*?<\/script>/, menuControllerScript.trim());
    modified = true;
  } else {
    content = content.replace('</body>', menuControllerScript.trim() + '\n</body>');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Synchronized robust menu dialog & controller in:', file);
  }
});

console.log('All HTML files now have unified, bulletproof mobile menu dialogs and controllers!');
