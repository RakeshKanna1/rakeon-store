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

/* Hide all mobile-only hero action/metric blocks on PC / Desktop */
@media screen and (min-width: 768px) {
  .hero_action-group-mobile,
  .hero_metrics-mobile,
  .mobile-only {
    display: none !important;
  }
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
html.dark-theme .section.is-pricing {
  background-color: #0c0a18 !important;
}

html.dark-theme .pricing-card-item,
html.dark-theme .home-pricing-card,
html.dark-theme .price-card,
html.dark-theme .pricing-compare-section {
  background-color: #131126 !important;
  border-color: rgba(255, 255, 255, 0.14) !important;
  box-shadow: 0 6px 0 rgba(0, 0, 0, 0.5) !important;
  color: #f4f4f8 !important;
}

html.dark-theme .pricing-card-item.is-featured {
  border-color: #f2c744 !important;
  background-color: #16132e !important;
  box-shadow: 0 8px 30px rgba(242, 199, 68, 0.15) !important;
}

html.dark-theme .pricing-card-item div[style*="background: #faf8f5"],
html.dark-theme .pricing-card-item div[style*="background:#faf8f5"],
html.dark-theme .pricing-card-item div[style*="background: rgba(242, 199, 68"] {
  background-color: #1c1836 !important;
  border-color: rgba(255, 255, 255, 0.12) !important;
}

html.dark-theme .pricing-card-item ul,
html.dark-theme .pricing-card-item li {
  color: #d4d4d8 !important;
}

html.dark-theme .pricing-card-item li strong {
  color: #ffffff !important;
}

html.dark-theme .home-pricing-card h3,
html.dark-theme .pricing-card-item h3,
html.dark-theme .home-pricing-title,
html.dark-theme .hero-price_title,
html.dark-theme .hero-price_header h1 span,
html.dark-theme .pricing-compare-section th,
html.dark-theme .pricing-compare-section td {
  color: #ffffff !important;
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
html.dark-theme .home-pricing-subtitle,
html.dark-theme .hero-price_header p {
  color: #a0a8c0 !important;
}

/* Capsule Selector Tabs */
html.dark-theme .home-duration-selector,
html.dark-theme .home-currency-selector,
html.dark-theme .duration-selector-wrap,
html.dark-theme .currency-selector-wrap,
html.dark-theme #savings-banner {
  background-color: #17142b !important;
  border: 1.5px solid rgba(255, 255, 255, 0.15) !important;
  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.4) !important;
  color: #f4f4f8 !important;
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

/* Service 3D Cards - Midnight Obsidian Box with Cyber Glow */
html.dark-theme .service-card,
html.dark-theme .service-card_flip,
html.dark-theme .service-card_flip-front,
html.dark-theme .service-card_flip-back {
  border-radius: 1.25rem !important;
}

html.dark-theme .service-card_flip-back {
  background-color: #131126 !important;
  border: 1.5px solid rgba(255, 255, 255, 0.18) !important;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6), 0 0 20px rgba(242, 199, 68, 0.08) !important;
  color: #f4f4f8 !important;
  box-sizing: border-box !important;
}

html.dark-theme .service-card_flip-front {
  background: linear-gradient(145deg, #181432 0%, #0c0a18 100%) !important;
  border: 1.5px solid rgba(255, 255, 255, 0.18) !important;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6), 0 0 20px rgba(242, 199, 68, 0.08) !important;
  box-sizing: border-box !important;
}

html.dark-theme .service-card_back-list-item div,
html.dark-theme .service-card_back-list-text {
  background-color: #1c1836 !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  color: #f4f4f8 !important;
  border-radius: 0.65rem !important;
  padding: 0.45rem 0.75rem !important;
  margin-bottom: 6px !important;
}

html.dark-theme .service-card_back-top-title,
html.dark-theme .service-card_back-text {
  color: #f2c744 !important;
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
   ACCESSIBILITY: Hide Skip Link offscreen unless focused
   ========================================================================== */
.skip-nav,
.skip-link,
[data-skip-link],
a.skip-nav_link,
a[href="#main"].skip-nav_link,
a[href="#main"] {
  position: absolute !important;
  top: -9999px !important;
  left: -9999px !important;
  width: 1px !important;
  height: 1px !important;
  opacity: 0 !important;
  pointer-events: none !important;
  overflow: hidden !important;
  z-index: -100 !important;
}

.skip-nav:focus,
.skip-link:focus,
a.skip-nav_link:focus,
a[href="#main"].skip-nav_link:focus,
a[href="#main"]:focus {
  position: fixed !important;
  top: 10px !important;
  left: 10px !important;
  width: auto !important;
  height: auto !important;
  opacity: 1 !important;
  pointer-events: auto !important;
  z-index: 99999 !important;
}

/* ==========================================================================
   DESKTOP PROTECTION: Strict Hide of Mobile-Only Hero Actions & Metrics
   Desktop (>= 768px) is 100% CLEAN & UNTOUCHED in Both Light & Dark Themes
   ========================================================================== */
.mobile-only,
.hero_action-group-mobile,
.hero_metrics-mobile,
[class*="mobile-only"] {
  display: none !important;
  visibility: hidden !important;
  height: 0 !important;
  width: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
  pointer-events: none !important;
}

@media screen and (max-width: 767px) {
  .mobile-only {
    display: block !important;
    visibility: visible !important;
    height: auto !important;
    width: auto !important;
    overflow: visible !important;
    pointer-events: auto !important;
  }
  .hero_action-group-mobile {
    display: flex !important;
    flex-direction: column !important;
    gap: 10px !important;
    width: 100% !important;
    margin-top: 1.25rem !important;
    box-sizing: border-box !important;
    visibility: visible !important;
    height: auto !important;
    overflow: visible !important;
    pointer-events: auto !important;
  }
  .hero_metrics-mobile {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 8px !important;
    width: 100% !important;
    margin-top: 1.25rem !important;
    margin-bottom: 1.5rem !important;
    font-family: monospace !important;
    font-size: 11px !important;
    box-sizing: border-box !important;
    visibility: visible !important;
    height: auto !important;
    overflow: visible !important;
    pointer-events: auto !important;
  }
}

/* ==========================================================================
   UNIVERSAL LIGHT THEME HEADER (Matching across All Pages: Home, Pricing, etc.)
   ========================================================================== */
html:not(.dark-theme) .header,
html:not(.dark-theme) header.header,
html:not(.dark-theme) body.is-price .header,
html:not(.dark-theme) body[data-wf-page="678f8fc870e24177d6118bfa"] .header,
html:not(.dark-theme) .pricing-page .header {
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

/* Service 3D Cards - Light Theme Crisp Box Outline & Card Depth */
.service-card,
.service-card_flip,
.service-card_flip-front,
.service-card_flip-back {
  border-radius: 1.25rem !important;
}

.service-card_flip-back {
  background-color: #ffffff !important;
  border: 1.5px solid #18181b !important;
  border-radius: 1.25rem !important;
  box-shadow: 0 6px 0 #18181b, 0 12px 28px rgba(0, 0, 0, 0.06) !important;
  color: #18181b !important;
  box-sizing: border-box !important;
}

.service-card_flip-front {
  border: 1.5px solid #18181b !important;
  border-radius: 1.25rem !important;
  box-shadow: 0 6px 0 #18181b, 0 12px 28px rgba(0, 0, 0, 0.06) !important;
  box-sizing: border-box !important;
}

.service-card_back-list-item div,
.service-card_back-list-text {
  background-color: #f4f2ee !important;
  border: 1px solid rgba(24, 24, 27, 0.12) !important;
  border-radius: 0.65rem !important;
  padding: 0.45rem 0.75rem !important;
  font-family: monospace !important;
  font-size: 11.5px !important;
  font-weight: 700 !important;
  color: #18181b !important;
  margin-bottom: 6px !important;
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
   EXCLUSIVE MOBILE VIEW ENGINE (max-width: 767px)
   Flawless tactile mobile cards, seamless scrolling, zero PC layout impact
   ========================================================================== */

@media screen and (max-width: 767px) {
  /* 1. Header & Navigation */
  .header,
  header.header {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
    padding-top: 0.75rem !important;
    padding-bottom: 0.75rem !important;
  }
  .header_inner {
    width: 100% !important;
  }
  .header_title-text {
    font-size: 11px !important;
  }

  /* 2. Page Titles & Typography */
  h1, .u-h1, .hero-price_title, .hero_title {
    font-size: clamp(1.85rem, 8vw, 2.45rem) !important;
    line-height: 1.1 !important;
    letter-spacing: -0.03em !important;
    text-align: center !important;
  }
  .hero-price_title span {
    font-size: clamp(1.85rem, 8vw, 2.45rem) !important;
  }
  .hero_description-text,
  .hero-price_description,
  p[style*="max-width: 680px"] {
    font-size: 13.5px !important;
    line-height: 1.55 !important;
    text-align: center !important;
    padding: 0 0.5rem !important;
  }

  /* 3. Duration & Currency Capsule Controls on Mobile */
  .duration-selector-wrap {
    display: flex !important;
    overflow-x: auto !important;
    -webkit-overflow-scrolling: touch !important;
    scrollbar-width: none !important;
    max-width: 100% !important;
    padding: 4px !important;
    gap: 4px !important;
    white-space: nowrap !important;
    box-sizing: border-box !important;
  }
  .duration-selector-wrap::-webkit-scrollbar {
    display: none !important;
  }
  .duration-btn {
    padding: 7px 12px !important;
    font-size: 11px !important;
    flex-shrink: 0 !important;
  }
  .currency-selector-wrap {
    display: inline-flex !important;
    padding: 4px !important;
  }
  .currency-btn {
    padding: 7px 12px !important;
    font-size: 11px !important;
  }

  /* 4. Live Dispatch / Savings Banner */
  #savings-banner {
    width: 100% !important;
    box-sizing: border-box !important;
    justify-content: center !important;
    font-size: 10.5px !important;
    padding: 7px 12px !important;
    text-align: center !important;
    line-height: 1.35 !important;
  }
  #savings-banner-text {
    white-space: normal !important;
    text-align: center !important;
  }

  /* 5. 3-Card Subscription Grid on Mobile */
  .pricing-grid-3col {
    grid-template-columns: 1fr !important;
    gap: 1.25rem !important;
    margin-bottom: 2.25rem !important;
    padding: 0 !important;
  }
  .pricing-card-item {
    padding: 1.35rem 1.15rem !important;
    border-radius: 1.15rem !important;
    box-shadow: 0 5px 0 #18181b !important;
  }
  .pricing-card-item h3 {
    font-size: 1.25rem !important;
  }
  .pricing-card-item p {
    font-size: 12.5px !important;
    line-height: 1.45 !important;
  }
  .pricing-card-item ul {
    gap: 8px !important;
    font-size: 12.5px !important;
    margin-bottom: 1.25rem !important;
  }

  /* 6. Action Buttons & Tap Targets (44px+ mobile touch standard) */
  .btn-primary-rakexura,
  button.btn-primary-rakexura,
  .btn-secondary-rakexura,
  .button-default {
    min-height: 46px !important;
    padding: 12px 18px !important;
    font-size: 13px !important;
    width: 100% !important;
    justify-content: center !important;
    box-sizing: border-box !important;
    text-align: center !important;
  }

  /* 7. Comparison Matrix Table on Mobile */
  .pricing-compare-section {
    border-radius: 1rem !important;
    padding: 1.15rem 0.85rem !important;
    margin: 1.5rem 0 !important;
    overflow-x: auto !important;
    -webkit-overflow-scrolling: touch !important;
  }
  .pricing-compare-section table {
    width: 100% !important;
    min-width: 500px !important;
    font-size: 12px !important;
  }
  .pricing-compare-section th,
  .pricing-compare-section td {
    padding: 8px 10px !important;
  }

  /* 8. Support Page Action Bar on Mobile */
  .support-action-bar,
  .hero-contact_action-group {
    width: 100% !important;
    flex-direction: column !important;
    gap: 10px !important;
  }

  /* 9. Validation Terminal on Mobile */
  .validator-terminal {
    padding: 1.25rem 1rem !important;
    border-radius: 1.15rem !important;
  }
  .validator-search-bar {
    flex-direction: column !important;
    gap: 8px !important;
  }
  .validator-search-input {
    width: 100% !important;
    height: 46px !important;
    font-size: 14px !important;
  }
  .validator-search-btn {
    width: 100% !important;
    height: 46px !important;
    justify-content: center !important;
  }

  /* 10. Footer on Mobile */
  .footer_next-page {
    flex-direction: column !important;
    width: 100% !important;
    gap: 8px !important;
  }
  .footer_next-page .button-default {
    width: 100% !important;
    justify-content: center !important;
  }
  .footer_sitemap {
    flex-direction: column !important;
    gap: 1.5rem !important;
  }
  .footer_sitemap-right {
    width: 100% !important;
    flex-direction: column !important;
    gap: 1rem !important;
  }
  .footer_action-right {
    width: 100% !important;
  }
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

  const marker = '/* ==========================================================================\n   UNIVERSAL LIGHT THEME HEADER';
  const marker2 = '/* ==========================================================================\n   RAKEXURA HARMONIOUS CYBER DARK THEME';
  let cutIndex = css.indexOf(marker);
  if (cutIndex === -1) cutIndex = css.indexOf(marker2);
  if (cutIndex === -1) cutIndex = css.indexOf('/* Pricing Comparison Matrix - Default Light Theme */');
  if (cutIndex !== -1) {
    css = css.substring(0, cutIndex).trimEnd();
  }

  css = css.trimEnd() + '\n\n' + baseEnhancements.trim() + '\n\n' + darkModeStyles.trim() + '\n';
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log("Updated stylesheets in:", cssPath);
});

// Update all HTML files that have <style id="rakexura-dark-theme-css">
const path = require('path');
function getAllHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      if (!['node_modules', '.git', '.system_generated', 'brain'].includes(file)) {
        results = results.concat(getAllHtmlFiles(filePath));
      }
    } else if (file.endsWith('.html')) {
      results.push(filePath);
    }
  });
  return results;
}

const htmlFiles = getAllHtmlFiles('.');
const combinedStyleTag = `<style id="rakexura-dark-theme-css">\n${baseEnhancements.trim()}\n\n${darkModeStyles.trim()}\n</style>`;

htmlFiles.forEach(file => {
  let html = fs.readFileSync(file, 'utf8');
  if (html.includes('id="rakexura-dark-theme-css"')) {
    html = html.replace(/<style id="rakexura-dark-theme-css">[\s\S]*?<\/style>/, combinedStyleTag);
    fs.writeFileSync(file, html, 'utf8');
    console.log("Synchronized rakexura-dark-theme-css in:", file);
  } else if (html.includes('</head>')) {
    html = html.replace('</head>', combinedStyleTag + '\n</head>');
    fs.writeFileSync(file, html, 'utf8');
    console.log("Injected rakexura-dark-theme-css in:", file);
  }
});

console.log("Dark mode palette and base enhancements updated successfully across all stylesheets and HTML files!");
