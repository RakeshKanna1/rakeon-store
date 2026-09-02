const fs = require('fs');
const path = require('path');

const cleanHeroMobileStyle = `<style id="clean-hero-mobile-style">
/* Replaced and consolidated by rakexura-mobile-pro-engine */
</style>`;

const rakexuraMobileProEngine = `<style id="rakexura-mobile-pro-engine">
  /* ==========================================================================
     RAKEXURA MASTER MOBILE RESPONSIVE ENGINE (Strictly Scoped: <= 991px & <= 767px)
     Desktop (> 991px) remains 100% UNTOUCHED and PRESERVED.
     ========================================================================== */

  @media screen and (max-width: 991px) {
    /* Tablet & Small Laptop Refinements */
    .u-container {
      padding-left: 1.5rem !important;
      padding-right: 1.5rem !important;
      max-width: 100% !important;
    }

    .hero-price_card-outer,
    .hero_card-outer {
      max-width: 100% !important;
    }

    .pricing-compare-section {
      overflow-x: auto !important;
      -webkit-overflow-scrolling: touch !important;
    }
  }

  @media screen and (max-width: 767px) {
    /* 1. Global Viewport & Hygiene - Zero horizontal drift */
    html, body {
      overflow-x: hidden !important;
      width: 100% !important;
      max-width: 100vw !important;
      -webkit-text-size-adjust: 100%;
    }

    .main,
    .page-wrapper,
    [data-scroll-container],
    #swup {
      overflow-x: hidden !important;
      width: 100% !important;
      max-width: 100vw !important;
    }

    .u-container {
      padding-left: 1rem !important;
      padding-right: 1rem !important;
      width: 100% !important;
      max-width: 100vw !important;
      box-sizing: border-box !important;
    }

    /* Prevent iOS Safari 16px input zoom */
    input[type="text"],
    input[type="tel"],
    input[type="password"],
    input[type="number"],
    input[type="search"],
    select,
    textarea {
      font-size: 16px !important;
    }

    /* 2. COMPLETELY ELIMINATE 350vh TRAPPED SCROLL CONTAINERS & VOID SPACES ON MOBILE */
    .intro,
    .service,
    .service_container,
    .service_inner,
    .service_cards,
    .service_header-outer,
    .service_sticky {
      display: none !important;
      height: 0 !important;
      min-height: 0 !important;
      max-height: 0 !important;
      margin: 0 !important;
      padding: 0 !important;
      overflow: hidden !important;
      visibility: hidden !important;
      pointer-events: none !important;
    }

    .process_sticky,
    .process_minimap,
    .next-page_tag-wrap {
      display: none !important;
      height: 0 !important;
      width: 0 !important;
      overflow: hidden !important;
    }

    /* 3. RESET ALL SECTION CONTAINER HEIGHTS TO NATURAL FLUID AUTO */
    .process_container,
    .process,
    .next-page,
    .next-page_container,
    .next-page_inner,
    .return,
    .utility-page-wrap,
    .hero,
    .hero_container,
    .hero_inner,
    .hero-price,
    .hero-process,
    .hero-contact,
    .hero-track,
    .section,
    .section.is-pricing,
    #pricing-matrix,
    .content-block,
    .faq {
      height: auto !important;
      min-height: 0 !important;
      max-height: none !important;
      position: relative !important;
      top: auto !important;
      transform: none !important;
    }

    /* 4. COMPACT VERTICAL RHYTHM */
    .hero,
    .hero-price,
    .hero-process,
    .hero-contact,
    .hero-track,
    .section,
    .section.is-pricing,
    #pricing-matrix,
    .content-block,
    .faq {
      padding-top: 1rem !important;
      padding-bottom: 1.25rem !important;
      margin-top: 0 !important;
      margin-bottom: 0 !important;
    }

    /* 5. Header Navigation Bar & Frosted Glass */
    html.dark-theme .header,
    body.dark-theme .header,
    .header {
      padding: 0.5rem 0.85rem !important;
      min-height: 3.25rem !important;
      background-color: rgba(12, 10, 24, 0.88) !important;
      backdrop-filter: blur(16px) !important;
      -webkit-backdrop-filter: blur(16px) !important;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
    }

    .header_inner {
      display: flex !important;
      justify-content: space-between !important;
      align-items: center !important;
      width: 100% !important;
      gap: 0.5rem !important;
    }

    html.dark-theme .header_title-button,
    html.dark-theme .header_title-bg,
    html.dark-theme .header_title-profile {
      background-color: #17142b !important;
      border: 1px solid rgba(255, 255, 255, 0.18) !important;
    }

    .header_nav {
      display: none !important;
    }

    .header_menu-button {
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      padding: 0.4rem 0.85rem !important;
      min-height: 2.15rem !important;
      border-radius: 999px !important;
      background: #17142b !important;
      border: 1px solid rgba(255, 255, 255, 0.18) !important;
      color: #ffffff !important;
      font-size: 11px !important;
      font-weight: 800 !important;
      letter-spacing: 0.05em !important;
      cursor: pointer !important;
      touch-action: manipulation !important;
    }
    .header_menu-button-text {
      color: #ffffff !important;
      font-family: monospace !important;
      font-size: 11px !important;
      font-weight: 800 !important;
    }
    .header_menu-button-bg {
      display: none !important;
    }

    /* Fullscreen Responsive Menu Drawer */
    dialog.menu:not([open]) {
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
      pointer-events: none !important;
    }
    dialog.menu[open],
    dialog.menu.is-open {
      display: block !important;
      visibility: visible !important;
      opacity: 1 !important;
      pointer-events: auto !important;
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      right: 0 !important;
      bottom: 0 !important;
      width: 100vw !important;
      height: 100vh !important;
      max-width: 100vw !important;
      max-height: 100vh !important;
      margin: 0 !important;
      padding: 0 !important;
      background-color: #0c0a18 !important;
      background: #0c0a18 !important;
      border: none !important;
      box-sizing: border-box !important;
      z-index: 999999 !important;
      transform: none !important;
      filter: none !important;
      backdrop-filter: none !important;
      -webkit-backdrop-filter: none !important;
    }

    dialog.menu .menu_backdrop {
      display: none !important;
    }

    dialog.menu .menu_outer {
      display: flex !important;
      flex-direction: column !important;
      justify-content: space-between !important;
      height: 100% !important;
      width: 100% !important;
      box-sizing: border-box !important;
      padding: 1.5rem 1.25rem !important;
      background-color: #0c0a18 !important;
      background: #0c0a18 !important;
      position: relative !important;
      z-index: 10 !important;
      filter: none !important;
      backdrop-filter: none !important;
      -webkit-backdrop-filter: none !important;
    }

    dialog.menu .menu_nav,
    dialog.menu .menu_nav-item,
    dialog.menu .menu_nav-item * {
      filter: none !important;
      backdrop-filter: none !important;
      -webkit-backdrop-filter: none !important;
      opacity: 1 !important;
    }

    /* 6. Typographic Proportions */
    h1,
    .u-h1,
    .hero_title,
    .hero_title-span,
    .hero-price_title,
    .hero-price_title-span,
    .hero-track_title {
      font-size: clamp(2rem, 8.5vw, 2.75rem) !important;
      line-height: 1.05 !important;
      letter-spacing: -0.03em !important;
      margin-bottom: 0.45rem !important;
      color: #ffffff !important;
      text-transform: uppercase !important;
      text-align: center !important;
    }

    p,
    .u-p1,
    .hero_desc,
    .hero_description-text,
    .hero-price_header p,
    .process_content-description,
    .next-page_description {
      font-size: 13.5px !important;
      line-height: 1.55 !important;
      color: #d4d4d8 !important;
      margin-bottom: 0.5rem !important;
      text-align: center !important;
    }

    .hero_description-text strong {
      color: #ffffff !important;
      font-weight: 700 !important;
    }

    .hero-process_tag,
    .hero_tag,
    .hero-price_tag,
    .hero-contact_tag,
    .hero-track_tag {
      padding: 4px 14px !important;
      font-size: 11px !important;
      font-weight: 800 !important;
      font-family: monospace !important;
      margin: 0 auto 0.65rem auto !important;
      display: inline-flex !important;
      background-color: #17142b !important;
      border: 1.5px solid #f2c744 !important;
      border-radius: 999px !important;
      box-shadow: 0 2px 8px rgba(242, 199, 68, 0.15) !important;
    }
    .hero_tag-text,
    .hero_tag .hero_tag-text {
      color: #f2c744 !important;
      font-weight: 800 !important;
    }

    /* 7. Proportional Center Hero Card */
    .hero_card-outer,
    .hero-price_card-outer {
      width: 100% !important;
      max-width: 220px !important;
      margin: 0.75rem auto !important;
      transform: none !important;
      display: flex !important;
      justify-content: center !important;
    }

    .hero_card-list {
      display: flex !important;
      justify-content: center !important;
      width: 100% !important;
      gap: 0 !important;
    }

    .hero_card-list-item:nth-child(2),
    .hero_card-list-item:nth-child(3) {
      display: none !important;
    }
    .hero_card-list-item:nth-child(1) {
      display: block !important;
      width: 100% !important;
    }

    .service-card {
      width: 100% !important;
      height: 185px !important;
      min-height: 185px !important;
      max-height: 185px !important;
      border-radius: 1.25rem !important;
      background: linear-gradient(145deg, #181432 0%, #0c0a18 100%) !important;
      border: 1.5px solid rgba(255, 255, 255, 0.15) !important;
      box-shadow: 0 14px 36px rgba(0, 0, 0, 0.6), 0 0 24px rgba(242, 199, 68, 0.08) !important;
      overflow: hidden !important;
    }

    .service-card_flip-front {
      display: flex !important;
      flex-direction: column !important;
      justify-content: space-between !important;
      height: 100% !important;
      padding: 0.9rem 1rem !important;
      background: transparent !important;
      border-radius: 1.25rem !important;
      box-sizing: border-box !important;
    }

    .service-card_front-visual {
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      margin: 0.35rem 0 !important;
    }

    .service-card_front-visual .pixel-visual_img {
      display: none !important;
    }

    .service-card_front-visual > div {
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 12px !important;
      width: 100% !important;
    }

    .service-card_front-visual > div::before {
      content: '' !important;
      display: inline-block !important;
      width: 48px !important;
      height: 48px !important;
      background: url('/assets/xbox-logo-50.png') center/75% no-repeat #17142b !important;
      border: 1.5px solid rgba(255, 255, 255, 0.2) !important;
      border-radius: 12px !important;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.6), 0 0 14px rgba(16, 185, 129, 0.25) !important;
      box-sizing: border-box !important;
    }

    .service-card_front-visual > div::after {
      content: '' !important;
      display: inline-block !important;
      width: 48px !important;
      height: 48px !important;
      background: url('/assets/nvidia-logo-48.png') center/75% no-repeat #17142b !important;
      border: 1.5px solid rgba(255, 255, 255, 0.2) !important;
      border-radius: 12px !important;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.6), 0 0 14px rgba(118, 185, 0, 0.25) !important;
      box-sizing: border-box !important;
    }

    /* 7.5. Hero Mobile Actions & Metrics */
    .hero_action-group-mobile {
      display: flex !important;
      flex-direction: column !important;
      gap: 10px !important;
      width: 100% !important;
      margin-top: 1.25rem !important;
      box-sizing: border-box !important;
    }

    .hero_action-group-mobile .btn-primary-rakexura {
      width: 100% !important;
      height: 48px !important;
      background: #f2c744 !important;
      color: #18181b !important;
      border: 1.5px solid #18181b !important;
      border-radius: 0.75rem !important;
      font-family: monospace !important;
      font-size: 12.5px !important;
      font-weight: 900 !important;
      letter-spacing: 0.05em !important;
      text-transform: uppercase !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      box-shadow: 0 3px 0 #18181b !important;
      text-decoration: none !important;
    }

    .hero_action-group-mobile .btn-secondary-rakexura {
      height: 44px !important;
      background: #1c1836 !important;
      border: 1.5px solid rgba(255, 255, 255, 0.18) !important;
      color: #f2c744 !important;
      border-radius: 0.75rem !important;
      font-family: monospace !important;
      font-size: 11.5px !important;
      font-weight: 800 !important;
      letter-spacing: 0.05em !important;
      text-transform: uppercase !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      box-shadow: 0 2px 0 rgba(0, 0, 0, 0.5) !important;
      text-decoration: none !important;
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
    }

    .hero_metrics-mobile > div {
      background: #17142b !important;
      border: 1.5px solid rgba(255, 255, 255, 0.12) !important;
      border-radius: 0.65rem !important;
      padding: 8px 10px !important;
      text-align: center !important;
      color: #f4f4f8 !important;
    }

    /* 8. Duration Capsule Selector & Currency Controls - Ultra-Sleek Scrollable Row */
    .duration-selector-wrap,
    .home-duration-selector {
      display: flex !important;
      flex-wrap: nowrap !important;
      overflow-x: auto !important;
      -webkit-overflow-scrolling: touch !important;
      scrollbar-width: none !important;
      max-width: 100% !important;
      gap: 4px !important;
      padding: 4px !important;
      width: auto !important;
      box-sizing: border-box !important;
      border-radius: 999px !important;
      background: #17142b !important;
      border: 1.5px solid rgba(255, 255, 255, 0.15) !important;
      box-shadow: 0 3px 0 rgba(0, 0, 0, 0.6) !important;
      margin: 0 auto 0.5rem auto !important;
    }
    .duration-selector-wrap::-webkit-scrollbar,
    .home-duration-selector::-webkit-scrollbar {
      display: none !important;
    }

    .duration-btn,
    .home-duration-btn,
    [data-duration] {
      flex-shrink: 0 !important;
      padding: 7px 12px !important;
      font-size: 11px !important;
      font-family: monospace !important;
      font-weight: 800 !important;
      text-transform: uppercase !important;
      border-radius: 999px !important;
      border: none !important;
      color: #f4f4f8 !important;
      background: transparent !important;
    }
    .duration-btn.active,
    .home-duration-btn.active {
      background: #f2c744 !important;
      color: #18181b !important;
    }

    .currency-selector-wrap,
    .home-currency-selector {
      display: inline-flex !important;
      padding: 4px !important;
      gap: 4px !important;
      background: #17142b !important;
      border: 1.5px solid rgba(255, 255, 255, 0.15) !important;
      border-radius: 999px !important;
      box-shadow: 0 3px 0 rgba(0, 0, 0, 0.6) !important;
      margin: 0 auto 0.75rem auto !important;
    }

    .currency-btn,
    .home-currency-btn,
    [data-curr],
    [data-currency] {
      padding: 7px 12px !important;
      font-size: 11px !important;
      font-family: monospace !important;
      font-weight: 800 !important;
      border-radius: 999px !important;
      border: none !important;
      color: #f4f4f8 !important;
      background: transparent !important;
    }
    .currency-btn.active,
    .home-currency-btn.active {
      background: #f2c744 !important;
      color: #18181b !important;
    }

    /* 9. Savings Banner Pill */
    #savings-banner,
    .savings-banner-pill,
    div:has(> #savings-banner-text) {
      width: 100% !important;
      max-width: 100% !important;
      box-sizing: border-box !important;
      justify-content: center !important;
      font-size: 10.5px !important;
      padding: 7px 12px !important;
      text-align: center !important;
      line-height: 1.35 !important;
      background: #17142b !important;
      border: 1.5px solid rgba(255, 255, 255, 0.15) !important;
      border-radius: 999px !important;
      box-shadow: 0 2px 0 rgba(0, 0, 0, 0.5) !important;
      color: #f4f4f8 !important;
    }
    #savings-banner-text {
      white-space: normal !important;
      text-align: center !important;
    }

    /* 10. 3-Card Subscription Grid on Mobile */
    .pricing-grid-3col,
    .home-pricing-grid,
    #pricing-cards-grid {
      display: flex !important;
      flex-direction: column !important;
      gap: 1.25rem !important;
      margin-bottom: 2.25rem !important;
      padding: 0 !important;
      width: 100% !important;
    }

    .pricing-card-item,
    .home-pricing-card,
    .price-card {
      width: 100% !important;
      max-width: 100% !important;
      box-sizing: border-box !important;
      padding: 1.35rem 1.15rem !important;
      border-radius: 1.15rem !important;
      box-shadow: 0 5px 0 rgba(0, 0, 0, 0.7) !important;
      background: #131126 !important;
      border: 1.5px solid rgba(255, 255, 255, 0.14) !important;
      margin: 0 !important;
    }

    .pricing-card-item h3 {
      font-size: 1.25rem !important;
      color: #ffffff !important;
    }
    .pricing-card-item p {
      font-size: 12.5px !important;
      line-height: 1.45 !important;
      color: #d4d4d8 !important;
    }
    .pricing-card-item ul {
      gap: 8px !important;
      font-size: 12.5px !important;
      margin-bottom: 1.25rem !important;
      color: #f4f4f8 !important;
    }

    /* 11. Buttons & Touch Targets */
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

    /* 12. Comparison Matrix Table on Mobile */
    .pricing-compare-section {
      background-color: #17142b !important;
      border: 1.5px solid rgba(255, 255, 255, 0.18) !important;
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
      color: #f4f4f8 !important;
    }
    .pricing-compare-section th,
    .pricing-compare-section td {
      padding: 8px 10px !important;
      color: #f4f4f8 !important;
      border-color: rgba(255, 255, 255, 0.12) !important;
    }

    /* 13. Support Page & Hero Contact on Mobile */
    .hero-contact {
      min-height: auto !important;
      height: auto !important;
      padding-top: 0.5rem !important;
      padding-bottom: 2rem !important;
      background-color: #0c0a18 !important;
    }

    .hero-contact_container {
      padding: 0 1rem !important;
      height: auto !important;
      min-height: auto !important;
    }

    .hero-contact_inner {
      display: flex !important;
      flex-direction: column !important;
      gap: 1.25rem !important;
      height: auto !important;
      min-height: auto !important;
    }

    .hero-contact_divider {
      display: flex !important;
      flex-direction: row !important;
      justify-content: space-between !important;
      align-items: center !important;
      flex-wrap: nowrap !important;
      padding: 0.35rem 0 !important;
      margin-bottom: 0.5rem !important;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
      width: 100% !important;
      font-family: monospace !important;
      font-size: 11px !important;
      color: #71717a !important;
    }

    .hero-contact_title {
      font-size: clamp(2rem, 8.5vw, 2.75rem) !important;
      font-weight: 900 !important;
      line-height: 1.05 !important;
      letter-spacing: -0.02em !important;
      text-transform: uppercase !important;
      color: #ffffff !important;
      display: flex !important;
      flex-wrap: wrap !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 0.5rem !important;
      text-align: center !important;
      margin: 0.5rem 0 1rem 0 !important;
    }

    .gif-image.is-hero-contact {
      width: 48px !important;
      height: 48px !important;
      border-radius: 0.65rem !important;
      display: inline-flex !important;
      vertical-align: middle !important;
    }

    .hero-contact_action-group {
      background: #131126 !important;
      border: 1.5px solid rgba(255, 255, 255, 0.14) !important;
      border-radius: 1.25rem !important;
      padding: 1.25rem 1rem !important;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6) !important;
      display: flex !important;
      flex-direction: column !important;
      gap: 1.25rem !important;
      width: 100% !important;
      box-sizing: border-box !important;
      margin-bottom: 1rem !important;
    }

    .hero-contact_description {
      font-size: 13.5px !important;
      line-height: 1.5 !important;
      color: #ffffff !important;
      font-weight: 700 !important;
      margin: 0 !important;
    }

    .hero-contact_description span.u-color-gray {
      color: #a1a1aa !important;
      font-weight: 400 !important;
      display: block !important;
      margin-top: 0.35rem !important;
      font-size: 12.5px !important;
    }

    .support-action-bar {
      display: flex !important;
      flex-direction: column !important;
      gap: 10px !important;
      width: 100% !important;
    }

    .support-action-bar .btn-primary-rakexura,
    .btn-primary-rakexura {
      background: #25D366 !important;
      border: 1.5px solid #1ebe5d !important;
      color: #ffffff !important;
      font-family: monospace !important;
      font-size: 12.5px !important;
      font-weight: 900 !important;
      letter-spacing: 0.05em !important;
      height: 48px !important;
      min-height: 48px !important;
      border-radius: 0.75rem !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 8px !important;
      text-decoration: none !important;
      box-shadow: 0 4px 14px rgba(37, 211, 102, 0.3) !important;
      width: 100% !important;
      box-sizing: border-box !important;
      text-transform: uppercase !important;
    }

    .support-action-bar .btn-secondary-rakexura,
    .btn-secondary-rakexura {
      background: #1c1836 !important;
      border: 1.5px solid rgba(255, 255, 255, 0.18) !important;
      color: #f2c744 !important;
      font-family: monospace !important;
      font-size: 12.5px !important;
      font-weight: 800 !important;
      letter-spacing: 0.05em !important;
      height: 48px !important;
      min-height: 48px !important;
      border-radius: 0.75rem !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 8px !important;
      text-decoration: none !important;
      box-shadow: 0 3px 0 rgba(0, 0, 0, 0.5) !important;
      width: 100% !important;
      box-sizing: border-box !important;
      text-transform: uppercase !important;
    }

    .hero-contact_mail {
      background: #17142b !important;
      border: 1.5px solid rgba(255, 255, 255, 0.14) !important;
      border-radius: 1rem !important;
      padding: 1rem 0.75rem !important;
      width: 100% !important;
      box-sizing: border-box !important;
      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
      gap: 0.5rem !important;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4) !important;
    }

    .hero-contact_mail-list {
      display: flex !important;
      justify-content: center !important;
      width: 100% !important;
      gap: 6px !important;
    }

    .hero-contact_pillow {
      background: #1c1836 !important;
      border: 1px solid rgba(255, 255, 255, 0.15) !important;
      border-radius: 999px !important;
      padding: 4px 12px !important;
    }

    .hero-contact_pillow-title {
      color: #f2c744 !important;
      font-family: monospace !important;
      font-size: 10.5px !important;
      font-weight: 800 !important;
    }

    .hero-contact_mail-button {
      font-size: 13px !important;
      font-family: monospace !important;
      font-weight: 900 !important;
      color: #ffffff !important;
      word-break: break-all !important;
      text-align: center !important;
      background: transparent !important;
      border: none !important;
      cursor: pointer !important;
      width: 100% !important;
      padding: 4px 0 !important;
    }

    .hero-contact_footer {
      display: flex !important;
      justify-content: space-between !important;
      align-items: center !important;
      width: 100% !important;
      padding-top: 1rem !important;
      border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
      font-family: monospace !important;
      font-size: 10.5px !important;
      color: #71717a !important;
      margin-top: 1.25rem !important;
    }

    /* FAQ Section on Mobile */
    .faq {
      background-color: #0c0a18 !important;
      padding: 2rem 0 3rem 0 !important;
      width: 100% !important;
    }

    .faq_container {
      padding: 0 1rem !important;
    }

    .faq_title {
      font-size: clamp(1.6rem, 6vw, 2.2rem) !important;
      font-weight: 900 !important;
      color: #ffffff !important;
      margin-bottom: 1.25rem !important;
      text-transform: uppercase !important;
      line-height: 1.15 !important;
    }

    .accordion_list {
      display: flex !important;
      flex-direction: column !important;
      gap: 0.75rem !important;
      width: 100% !important;
    }

    .accordion_details {
      background: #131126 !important;
      border: 1.5px solid rgba(255, 255, 255, 0.12) !important;
      border-radius: 1rem !important;
      padding: 1.15rem 1rem !important;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.4) !important;
      transition: border-color 0.2s !important;
    }

    .accordion_details[open] {
      border-color: rgba(242, 199, 68, 0.4) !important;
      background: #17142b !important;
    }

    .accordion_summary {
      display: flex !important;
      justify-content: space-between !important;
      align-items: center !important;
      cursor: pointer !important;
      list-style: none !important;
    }

    .accordion_title {
      font-size: 13.5px !important;
      font-weight: 800 !important;
      color: #ffffff !important;
      line-height: 1.4 !important;
    }

    .accordion_tag {
      color: #f2c744 !important;
      font-family: monospace !important;
      font-size: 10px !important;
      font-weight: 800 !important;
      text-transform: uppercase !important;
      background: #1c1836 !important;
      border: 1px solid rgba(242, 199, 68, 0.25) !important;
      padding: 2px 8px !important;
      border-radius: 999px !important;
    }

    .accordion_paragraph {
      font-size: 12.5px !important;
      line-height: 1.55 !important;
      color: #d4d4d8 !important;
      margin-top: 0.75rem !important;
      padding-top: 0.75rem !important;
      border-top: 1px solid rgba(255, 255, 255, 0.08) !important;
    }

    /* 14. Validation Terminal & Process Phases on Mobile */
    .hero-process {
      min-height: auto !important;
      height: auto !important;
      padding-top: 0.5rem !important;
      padding-bottom: 2rem !important;
      background-color: #0c0a18 !important;
    }

    .hero-process_container {
      padding: 0 1rem !important;
      height: auto !important;
      min-height: auto !important;
    }

    .hero-process_inner {
      display: flex !important;
      flex-direction: column !important;
      gap: 1.25rem !important;
      height: auto !important;
      min-height: auto !important;
    }

    .hero-process_divider {
      display: flex !important;
      flex-direction: row !important;
      justify-content: space-between !important;
      align-items: center !important;
      flex-wrap: nowrap !important;
      padding: 0.35rem 0 !important;
      margin-bottom: 0.5rem !important;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
      width: 100% !important;
      font-family: monospace !important;
      font-size: 11px !important;
      color: #71717a !important;
    }

    .hero-process_title {
      font-size: clamp(2rem, 8.5vw, 2.75rem) !important;
      font-weight: 900 !important;
      line-height: 1.05 !important;
      letter-spacing: -0.02em !important;
      text-transform: uppercase !important;
      color: #ffffff !important;
      display: flex !important;
      flex-wrap: wrap !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 0.5rem !important;
      text-align: center !important;
      margin: 0.5rem 0 1rem 0 !important;
    }

    .hero-process_overview,
    .hero-process_list {
      display: grid !important;
      grid-template-columns: 1fr 1fr !important;
      gap: 0.5rem !important;
      font-family: monospace !important;
      font-size: 11px !important;
      color: #a1a1aa !important;
      padding: 0.75rem 0 !important;
      border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
    }

    .hero-process_description-text {
      font-size: 13.5px !important;
      line-height: 1.55 !important;
      color: #d4d4d8 !important;
      text-align: center !important;
    }

    .validator-section {
      padding: 1.5rem 1rem 2.5rem 1rem !important;
      background-color: #0c0a18 !important;
      width: 100% !important;
      box-sizing: border-box !important;
    }

    .validator-terminal {
      background: #131126 !important;
      border: 1.5px solid rgba(255, 255, 255, 0.14) !important;
      border-radius: 1.25rem !important;
      padding: 1.25rem 1rem !important;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6) !important;
      color: #ffffff !important;
      box-sizing: border-box !important;
    }

    .validator-terminal-header {
      display: flex !important;
      justify-content: space-between !important;
      align-items: center !important;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
      padding-bottom: 0.75rem !important;
      margin-bottom: 1rem !important;
      font-family: monospace !important;
      font-size: 11px !important;
      color: #71717a !important;
      flex-wrap: wrap !important;
      gap: 6px !important;
    }

    .validator-input-group {
      display: flex !important;
      flex-direction: column !important;
      gap: 10px !important;
      width: 100% !important;
    }

    .validator-input,
    #val-key-input {
      width: 100% !important;
      height: 48px !important;
      background: #1b1738 !important;
      border: 1.5px solid rgba(255, 255, 255, 0.15) !important;
      border-radius: 0.75rem !important;
      padding: 0 1rem !important;
      color: #ffffff !important;
      font-family: monospace !important;
      font-size: 14px !important;
      box-sizing: border-box !important;
      outline: none !important;
    }

    #val-submit-btn,
    .validator-input-group .btn-primary-rakexura {
      width: 100% !important;
      height: 48px !important;
      background: #f2c744 !important;
      color: #18181b !important;
      border: 1.5px solid #18181b !important;
      border-radius: 0.75rem !important;
      font-family: monospace !important;
      font-size: 12.5px !important;
      font-weight: 900 !important;
      letter-spacing: 0.05em !important;
      text-transform: uppercase !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 8px !important;
      box-shadow: 0 3px 0 #18181b !important;
      box-sizing: border-box !important;
    }

    .validator-result-card,
    #val-result-card {
      background: #17142b !important;
      border: 1.5px solid rgba(255, 255, 255, 0.16) !important;
      border-radius: 1rem !important;
      padding: 1.25rem 1rem !important;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5) !important;
      margin-top: 1.25rem !important;
    }

    .validator-result-card > div[style*="grid-template-columns"] {
      display: grid !important;
      grid-template-columns: 1fr !important;
      gap: 10px !important;
      margin-bottom: 1.25rem !important;
    }

    .validator-result-card div[style*="background: #ffffff"],
    .validator-result-card div[style*="background:#ffffff"] {
      background: #1c1836 !important;
      border: 1.5px solid rgba(255, 255, 255, 0.12) !important;
      border-radius: 0.75rem !important;
      padding: 12px 14px !important;
    }

    .validator-result-card .btn-primary-rakexura,
    .validator-result-card .btn-secondary-rakexura {
      width: 100% !important;
      height: 46px !important;
      justify-content: center !important;
      box-sizing: border-box !important;
    }

    .validator-result-card .btn-secondary-rakexura {
      background: #1c1836 !important;
      border: 1.5px solid rgba(255, 255, 255, 0.18) !important;
      color: #f2c744 !important;
      font-weight: 800 !important;
    }

    #val-error-card {
      background: #261118 !important;
      border: 1.5px solid #ef4444 !important;
      border-radius: 1rem !important;
      padding: 1.25rem 1rem !important;
      margin-top: 1.25rem !important;
      box-shadow: 0 6px 20px rgba(239, 68, 68, 0.2) !important;
    }

    #val-error-card p {
      color: #fca5a5 !important;
      font-size: 13px !important;
      line-height: 1.5 !important;
    }

    #val-error-card .btn-primary-rakexura,
    #val-error-card .btn-secondary-rakexura {
      width: 100% !important;
      height: 46px !important;
      justify-content: center !important;
    }

    /* Process Section on Mobile */
    .process {
      padding: 1.5rem 0 2.5rem 0 !important;
      background-color: #0c0a18 !important;
    }

    .process_container {
      padding: 0 1rem !important;
    }

    .process_area-inner {
      display: flex !important;
      flex-direction: column !important;
      gap: 1.25rem !important;
      padding: 1.25rem 0 !important;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
    }

    .process_visual-img-outer {
      border-radius: 1rem !important;
      overflow: hidden !important;
      border: 1.5px solid rgba(255, 255, 255, 0.15) !important;
      background: #131126 !important;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5) !important;
    }

    .process_title {
      font-size: 1.35rem !important;
      font-weight: 900 !important;
      color: #ffffff !important;
      line-height: 1.2 !important;
      text-transform: uppercase !important;
    }

    .process_paragraph {
      font-size: 13.5px !important;
      line-height: 1.55 !important;
      color: #d4d4d8 !important;
    }

    /* 14. Footer on Mobile */
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
</style>`;

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

  if (content.includes('<style id="homepage-mobile-style">')) {
    content = content.replace(/<style id="homepage-mobile-style">[\s\S]*?<\/style>/, '<style id="homepage-mobile-style">\n/* Replaced and consolidated by rakexura-mobile-pro-engine */\n</style>');
    modified = true;
  }

  if (content.includes('<style id="clean-hero-mobile-style">')) {
    content = content.replace(/<style id="clean-hero-mobile-style">[\s\S]*?<\/style>/, cleanHeroMobileStyle);
    modified = true;
  }

  if (content.includes('<style id="rakexura-mobile-pro-engine">')) {
    content = content.replace(/<style id="rakexura-mobile-pro-engine">[\s\S]*?<\/style>/, rakexuraMobileProEngine);
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated mobile pro engine in:', file);
  }
});

console.log('All HTML files synchronized with master rakexura-mobile-pro-engine!');
