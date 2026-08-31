const fs = require('fs');

const darkModeStyles = `
/* ==========================================================================
   RAKEXURA HARMONIOUS CYBER DARK THEME
   Tailored for luxurious contrast, eye-comfort midnight tones, and legible text
   ========================================================================== */

html.dark-theme,
body.dark-theme,
[data-theme="dark"] {
  --color-background: #0c0a18 !important;
  --color: #f4f4f8 !important;
  --ci-cream: #0c0a18 !important;
  --ci-black: #f4f4f8 !important;
  --ci-beige: #17142b !important;
  --color-background-beige: #17142b !important;
  background-color: #0c0a18 !important;
  color: #f4f4f8 !important;
}

html.dark-theme body {
  background-color: #0c0a18 !important;
  color: #f4f4f8 !important;
}

/* Nav & Header */
html.dark-theme .header,
html.dark-theme .header_inner {
  background-color: transparent !important;
}

html.dark-theme .header_nav-button-bg,
html.dark-theme .button-default_button-bg {
  background-color: #17142b !important;
  border: 1px solid rgba(255, 255, 255, 0.12) !important;
}

html.dark-theme .header_nav-button,
html.dark-theme .header_title-link,
html.dark-theme .header_menu-button {
  color: #f4f4f8 !important;
}

/* Accent Buttons */
html.dark-theme .button-default_button-bg.is-yellow,
html.dark-theme .is-yellow {
  background-color: #f2c744 !important;
  color: #18181b !important;
}

html.dark-theme .button-default.is-yellow .button-default_button-text,
html.dark-theme .button-default.is-yellow svg {
  color: #18181b !important;
  fill: #18181b !important;
}

/* Header Title Button (Black Pill with subtle white border in dark mode) */
html.dark-theme .header_title-button {
  background-color: #1a1633 !important;
  border: 1px solid rgba(255, 255, 255, 0.18) !important;
}

html.dark-theme .header_title-bg {
  background-color: #1a1633 !important;
}

html.dark-theme .header_title-profile {
  background-color: #141129 !important;
  border-color: rgba(255, 255, 255, 0.2) !important;
}

/* Pricing Section & Cards */
html.dark-theme .home-pricing-section,
html.dark-theme #pricing-matrix,
html.dark-theme .section.is-pricing,
html.dark-theme .pricing-card-item,
html.dark-theme .home-pricing-card,
html.dark-theme .price-card,
html.dark-theme .pricing-compare-section {
  background-color: #131126 !important;
  border-color: rgba(255, 255, 255, 0.12) !important;
  color: #f4f4f8 !important;
}

html.dark-theme .home-pricing-card h3,
html.dark-theme .pricing-card-item h3,
html.dark-theme .home-pricing-title,
html.dark-theme .pricing-compare-section th,
html.dark-theme .pricing-compare-section td {
  color: #f4f4f8 !important;
}

html.dark-theme .home-pricing-card p,
html.dark-theme .pricing-card-item p,
html.dark-theme .home-pricing-subtitle {
  color: #a0a8c0 !important;
}

/* Capsule Selector Tabs */
html.dark-theme .home-duration-selector,
html.dark-theme .home-currency-selector,
html.dark-theme .duration-selector-wrap,
html.dark-theme .currency-selector-wrap {
  background-color: #1a1633 !important;
  border: 1.5px solid rgba(255, 255, 255, 0.15) !important;
  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.4) !important;
}

html.dark-theme .home-duration-btn,
html.dark-theme .home-currency-btn,
html.dark-theme .duration-btn,
html.dark-theme .currency-btn {
  color: #cbd5e1 !important;
}

html.dark-theme .home-duration-btn.active,
html.dark-theme .home-currency-btn.active,
html.dark-theme .duration-btn.active,
html.dark-theme .currency-btn.active {
  background-color: #f2c744 !important;
  color: #0c0a18 !important;
  font-weight: 800 !important;
}

/* Sub-panels inside pricing cards */
html.dark-theme .pricing-card-item > div > div[style*="background: var(--theme-card-sub"],
html.dark-theme .pricing-card-item > div > div[style*="background: rgba(242, 199, 68"] {
  background-color: #1b1738 !important;
  border-color: rgba(255, 255, 255, 0.1) !important;
}

/* Footer */
html.dark-theme .footer {
  background-color: #080612 !important;
  border-top: 1px solid rgba(255, 255, 255, 0.08) !important;
  color: #f4f4f8 !important;
}

html.dark-theme .footer_card {
  background-color: #131126 !important;
  border-color: rgba(255, 255, 255, 0.12) !important;
}

html.dark-theme .footer_card-bg-left,
html.dark-theme .footer_card-bg-center,
html.dark-theme .footer_card-bg-right {
  background-color: #131126 !important;
}

/* Service & Intro Sections */
html.dark-theme .intro,
html.dark-theme .intro.u-theme-dark,
html.dark-theme .intro_wrap {
  background-color: #080612 !important;
}

html.dark-theme .service_card {
  background-color: #131126 !important;
  border-color: rgba(255, 255, 255, 0.12) !important;
}

/* Validation & Admin Panels */
html.dark-theme .validator-terminal,
html.dark-theme .telemetry-card-vault,
html.dark-theme .search-card,
html.dark-theme .manage-table-card {
  background-color: #131126 !important;
  border-color: rgba(255, 255, 255, 0.12) !important;
  color: #f4f4f8 !important;
}

html.dark-theme input,
html.dark-theme select,
html.dark-theme textarea {
  background-color: #1b1738 !important;
  border-color: rgba(255, 255, 255, 0.15) !important;
  color: #f4f4f8 !important;
}
`;

['styles.css', 'public/styles.css', 'public/showcase/styles.css'].forEach(cssPath => {
  if (!fs.existsSync(cssPath)) return;
  let css = fs.readFileSync(cssPath, 'utf8');

  // Remove previous custom dark theme block if present
  const cutIndex = css.indexOf('/* ==========================================================================\n   RAKEXURA HARMONIOUS CYBER DARK THEME');
  if (cutIndex !== -1) {
    css = css.substring(0, cutIndex).trimEnd();
  }

  css = css.trimEnd() + '\n\n' + darkModeStyles.trim() + '\n';
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log("Updated dark mode palette in:", cssPath);
});

console.log("Dark mode palette updated successfully!");
