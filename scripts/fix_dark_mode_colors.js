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

/* Nav & Header (Dark Mode Only) */
html.dark-theme .header,
html.dark-theme header.header,
body.dark-theme .header,
body.dark-theme header.header {
  background-color: rgba(12, 10, 24, 0.88) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12) !important;
}
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

/* Secondary Buttons */
html.dark-theme .btn-secondary-rakexura {
  background-color: #1a1633 !important;
  color: #f4f4f8 !important;
  border-color: rgba(255, 255, 255, 0.2) !important;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.5) !important;
}

html.dark-theme .btn-secondary-rakexura:hover {
  background-color: #241f47 !important;
  color: #ffffff !important;
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
  box-shadow: 0 6px 0 rgba(0, 0, 0, 0.5) !important;
  color: #f4f4f8 !important;
}

html.dark-theme .home-pricing-card h3,
html.dark-theme .pricing-card-item h3,
html.dark-theme .home-pricing-title,
html.dark-theme .pricing-compare-section th,
html.dark-theme .pricing-compare-section td {
  color: #f4f4f8 !important;
}

html.dark-theme .pricing-compare-section td strong {
  color: #ffffff !important;
}

html.dark-theme .pricing-compare-section td:nth-child(3) {
  background-color: rgba(242, 199, 68, 0.1) !important;
  color: #fef08a !important;
}

html.dark-theme .pricing-compare-section td:nth-child(3) strong {
  color: #ffffff !important;
}

html.dark-theme .pricing-compare-section thead tr {
  background-color: #1a1633 !important;
  border-bottom-color: rgba(255, 255, 255, 0.15) !important;
}

html.dark-theme .pricing-compare-section tr {
  border-bottom-color: rgba(255, 255, 255, 0.08) !important;
}

html.dark-theme .pricing-compare-section td[style*="color: #71717a"],
html.dark-theme .pricing-compare-section td[style*="color:#71717a"],
html.dark-theme .pricing-compare-section td[style*="color: #888888"],
html.dark-theme .pricing-compare-section td[style*="color:#888888"] {
  color: #94a3b8 !important;
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

html.dark-theme .validator-result-card {
  background-color: #1a1633 !important;
  border-color: rgba(255, 255, 255, 0.15) !important;
  color: #f4f4f8 !important;
}

html.dark-theme .validator-result-card div[style*="background: #ffffff"],
html.dark-theme .validator-result-card div[style*="background:#ffffff"] {
  background-color: #131126 !important;
  border-color: rgba(255, 255, 255, 0.12) !important;
  color: #f4f4f8 !important;
}

html.dark-theme #val-error-card {
  background-color: #261118 !important;
  border-color: #ef4444 !important;
}

html.dark-theme #val-error-card p {
  color: #fca5a5 !important;
}

html.dark-theme #val-loading {
  color: #a0a8c0 !important;
}


/* Dark Theme Footer Next-Page Gateway */
html.dark-theme .footer_next-page .button-default.no-animation {
  background-color: #17142b !important;
  color: #f4f4f8 !important;
  border-color: rgba(255, 255, 255, 0.15) !important;
}

html.dark-theme .footer_next-page .button-default.is-yellow {
  background-color: #f2c744 !important;
  color: #18181b !important;
  border-color: #18181b !important;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.6) !important;
}

html.dark-theme .footer_next-page .button-default.is-yellow .button-default_button-text,
html.dark-theme .footer_next-page .button-default.is-yellow svg {
  color: #18181b !important;
}

html.dark-theme #val-loading div {
  color: #f4f4f8 !important;
}
`;

const baseEnhancements = `

/* ==========================================================================
   UNIVERSAL LIGHT THEME HEADER (Matching across All Pages: Home, Pricing, etc.)
   ========================================================================== */
.header,
header.header,
body.is-price .header,
body[data-wf-page="678f8fc870e24177d6118bfa"] .header,
.pricing-page .header {
  background-color: rgba(242, 239, 235, 0.85) !important;
  backdrop-filter: blur(12px) !important;
  -webkit-backdrop-filter: blur(12px) !important;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08) !important;
}

body.is-price .header_nav,
body[data-wf-page="678f8fc870e24177d6118bfa"] .header_nav {
  background: transparent !important;
}

body.is-price .header_nav-link,
body[data-wf-page="678f8fc870e24177d6118bfa"] .header_nav-link {
  background: rgba(0, 0, 0, 0.05) !important;
  color: #000000 !important;
  border: 1px solid rgba(0, 0, 0, 0.1) !important;
}

body.is-price .header_nav-link:hover,
body[data-wf-page="678f8fc870e24177d6118bfa"] .header_nav-link:hover {
  background: rgba(0, 0, 0, 0.1) !important;
  color: #000000 !important;
}

body.is-price .header_nav-link.w--current,
body[data-wf-page="678f8fc870e24177d6118bfa"] .header_nav-link.w--current {
  background: #000000 !important;
  color: #ffffff !important;
  border-color: #000000 !important;
}

body.is-price .header_button,
body[data-wf-page="678f8fc870e24177d6118bfa"] .header_button {
  background: #000000 !important;
  color: #ffffff !important;
  border: 1px solid #000000 !important;
}

body.is-price .header_logo-text,
body.is-price .header_title-text,
body[data-wf-page="678f8fc870e24177d6118bfa"] .header_logo-text,
body[data-wf-page="678f8fc870e24177d6118bfa"] .header_title-text {
  color: #000000 !important;
}

/* Pricing Comparison Matrix - Default Light Theme */
.pricing-compare-section {
  background-color: #ffffff !important;
  border: 1.5px solid #18181b !important;
  color: #18181b !important;
}

.pricing-compare-section table {
  color: #18181b !important;
}

.pricing-compare-section th {
  color: #18181b !important;
}

.pricing-compare-section td {
  color: #18181b !important;
}

.pricing-compare-section td strong {
  color: #18181b !important;
}

.pricing-compare-section td[style*="color: #71717a"],
.pricing-compare-section td[style*="color:#71717a"],
.pricing-compare-section td[style*="color: #888888"],
.pricing-compare-section td[style*="color:#888888"] {
  color: #71717a !important;
}

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


/* ==========================================================================
   UNIFIED FOOTER NEXT-PAGE GATEWAY PILLS
   Flawless, identical styling across all pages (Home, Pricing, Validation, Support)
   ========================================================================== */
.footer_next-page {
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
  flex-wrap: wrap !important;
}

.footer_next-page-action {
  display: inline-flex !important;
  align-items: center !important;
}

/* Left Informational Pill (e.g. "NEED SUPPORT?", "HOW IT WORKS?", "VIEW PRICING?") */
.footer_next-page .button-default.no-animation {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  height: 38px !important;
  min-height: 38px !important;
  box-sizing: border-box !important;
  background-color: #e8e3dc !important;
  color: #18181b !important;
  border: 1.5px solid rgba(24, 24, 27, 0.15) !important;
  border-radius: 1.25rem !important;
  padding: 0 16px !important;
  font-family: var(--font-family-mono, monospace) !important;
  font-size: 11.5px !important;
  font-weight: 800 !important;
  letter-spacing: 0.06em !important;
  text-transform: uppercase !important;
  text-decoration: none !important;
  overflow: hidden !important;
}

.footer_next-page .button-default.no-animation .button-default_button-bg {
  display: none !important;
}

.footer_next-page .button-default.no-animation .button-default_button-container {
  padding: 0 !important;
  color: inherit !important;
  font-family: inherit !important;
  font-size: inherit !important;
  font-weight: inherit !important;
  text-transform: inherit !important;
}

/* Right Interactive Action Pill (e.g. "SUPPORT", "VALIDATION", "PRICING") */
.footer_next-page .button-default.is-yellow {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 6px !important;
  height: 38px !important;
  min-height: 38px !important;
  box-sizing: border-box !important;
  background-color: #f2c744 !important;
  color: #18181b !important;
  border: 1.5px solid #18181b !important;
  border-radius: 1.25rem !important;
  box-shadow: 0 2px 0 #18181b !important;
  padding: 0 18px !important;
  font-family: var(--font-family-mono, monospace) !important;
  font-size: 11.5px !important;
  font-weight: 800 !important;
  letter-spacing: 0.06em !important;
  text-transform: uppercase !important;
  text-decoration: none !important;
  cursor: pointer !important;
  overflow: hidden !important;
  transition: transform 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease !important;
}

.footer_next-page .button-default.is-yellow:hover {
  background-color: #e8bc33 !important;
  transform: translateY(-1px) !important;
  box-shadow: 0 3px 0 #18181b !important;
}

.footer_next-page .button-default.is-yellow .button-default_button-bg {
  display: none !important;
}

.footer_next-page .button-default.is-yellow .button-default_button-container {
  padding: 0 !important;
  gap: 6px !important;
  color: inherit !important;
  font-family: inherit !important;
  font-size: inherit !important;
  font-weight: inherit !important;
  text-transform: inherit !important;
}

.footer_next-page .button-default.is-yellow svg {
  width: 14px !important;
  height: 14px !important;
  color: #18181b !important;
  flex-shrink: 0 !important;
}

.support-action-bar {
  display: flex !important;
  flex-wrap: wrap !important;
  gap: 12px !important;
  align-items: center !important;
  margin-top: 0 !important;
}
`;

['styles.css', 'public/styles.css', 'public/showcase/styles.css'].forEach(cssPath => {
  if (!fs.existsSync(cssPath)) return;
  let css = fs.readFileSync(cssPath, 'utf8');

  // Remove previous custom blocks if present
  const cutIndex = css.indexOf('/* Pricing Comparison Matrix - Default Light Theme */');
  if (cutIndex !== -1) {
    css = css.substring(0, cutIndex).trimEnd();
  } else {
    const darkIndex = css.indexOf('/* ==========================================================================\n   RAKEXURA HARMONIOUS CYBER DARK THEME');
    if (darkIndex !== -1) {
      css = css.substring(0, darkIndex).trimEnd();
    }
  }

  css = css.trimEnd() + '\n\n' + baseEnhancements.trim() + '\n\n' + darkModeStyles.trim() + '\n';
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log("Updated stylesheets in:", cssPath);
});

console.log("Dark mode palette and base enhancements updated successfully!");
