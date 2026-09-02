const fs = require('fs');
const path = require('path');

const trackTargets = [
  'track.html',
  'track/index.html',
  'public/track.html',
  'public/track/index.html',
  'public/showcase/track.html',
  'public/showcase/track/index.html'
];

const trackStyleEnhancements = `
<style id="rakexura-track-pro-style">
  /* Universal Cyber Telemetry Styles */
  .matrix-content-wrapper {
    max-width: 820px;
    margin: 0 auto;
    padding: 1.5rem 1rem;
    box-sizing: border-box;
  }

  /* Telemetry Hero Header */
  .track-hero-container {
    text-align: center;
    margin-bottom: 2rem;
  }

  .track-badge-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: monospace;
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-weight: 800;
    padding: 4px 14px;
    border-radius: 999px;
    margin-bottom: 0.75rem;
    background: #17142b;
    border: 1.5px solid #f2c744;
    color: #f2c744;
    box-shadow: 0 2px 8px rgba(242, 199, 68, 0.15);
  }

  .track-hero-title {
    font-size: clamp(2rem, 5.5vw, 3.25rem);
    font-weight: 900;
    line-height: 1.1;
    margin: 0 0 0.5rem 0;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: #ffffff;
  }

  .track-hero-title span {
    background: #f2c744;
    color: #18181b;
    padding: 0 0.45rem;
    border-radius: 0.45rem;
    border: 1.5px solid #18181b;
    display: inline-block;
  }

  .track-hero-subtitle {
    color: #d4d4d8;
    font-size: 14px;
    max-width: 540px;
    margin: 0 auto;
    line-height: 1.6;
  }

  /* Toolbar Search Controls */
  .toolbar-wrapper {
    display: flex;
    gap: 0.75rem;
    max-width: 760px;
    margin: 0 auto 2.5rem auto;
    background: #131126;
    border: 1.5px solid rgba(255, 255, 255, 0.14);
    border-radius: 1.25rem;
    padding: 0.75rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
    box-sizing: border-box;
  }

  .search-ctrl-input {
    flex: 1;
    height: 48px;
    background: #1b1738;
    border: 1.5px solid rgba(255, 255, 255, 0.15);
    border-radius: 0.75rem;
    padding: 0 1rem;
    color: #ffffff;
    font-family: monospace;
    font-size: 14px;
    box-sizing: border-box;
    outline: none;
    transition: border-color 0.2s;
  }

  .search-ctrl-input:focus {
    border-color: #f2c744;
    box-shadow: 0 0 12px rgba(242, 199, 68, 0.2);
  }

  .search-ctrl-input::placeholder {
    color: #71717a;
    font-size: 13px;
  }

  .btn-gold-cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    height: 48px;
    padding: 0 1.5rem;
    background: #f2c744;
    color: #18181b;
    border: 1.5px solid #18181b;
    border-radius: 0.75rem;
    font-family: monospace;
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    box-shadow: 0 3px 0 #18181b;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;
    transition: transform 0.15s, background-color 0.15s;
    flex-shrink: 0;
  }

  .btn-gold-cta:hover {
    background: #eab308;
    transform: translateY(-1px);
  }

  /* Telemetry Card Vault */
  .telemetry-card-vault {
    background: #131126;
    border: 1.5px solid rgba(255, 255, 255, 0.16);
    border-radius: 1.25rem;
    padding: clamp(1.25rem, 3.5vw, 2.5rem);
    box-shadow: 0 14px 40px rgba(0, 0, 0, 0.6);
    margin: 0 auto 3rem auto;
    max-width: 760px;
    color: #f4f4f8;
    box-sizing: border-box;
  }

  .telemetry-top-strip {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.25rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 1rem;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .status-badge-healthy {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(34, 197, 94, 0.15);
    border: 1px solid rgba(34, 197, 94, 0.4);
    color: #4ade80;
    padding: 3px 10px;
    border-radius: 999px;
    font-family: monospace;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.05em;
  }

  .status-badge-warning {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(234, 179, 8, 0.15);
    border: 1px solid rgba(234, 179, 8, 0.4);
    color: #facc15;
    padding: 3px 10px;
    border-radius: 999px;
    font-family: monospace;
    font-size: 11px;
    font-weight: 800;
  }

  .status-badge-expired {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(239, 68, 68, 0.15);
    border: 1px solid rgba(239, 68, 68, 0.4);
    color: #f87171;
    padding: 3px 10px;
    border-radius: 999px;
    font-family: monospace;
    font-size: 11px;
    font-weight: 800;
  }

  .slot-id-badge {
    background: #1c1836;
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: #f2c744;
    padding: 3px 10px;
    border-radius: 999px;
    font-family: monospace;
    font-size: 11px;
    font-weight: 800;
  }

  .telemetry-customer-tag {
    font-size: 11px;
    color: #a1a1aa;
    font-family: monospace;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-weight: 700;
  }

  .telemetry-platform-title {
    font-size: clamp(1.4rem, 3.5vw, 2.1rem);
    font-weight: 900;
    color: #ffffff;
    margin: 0.35rem 0 1.25rem 0;
    line-height: 1.15;
    letter-spacing: -0.01em;
    text-transform: uppercase;
  }

  .countdown-vault-box {
    background: #17142b;
    border: 1.5px solid rgba(255, 255, 255, 0.14);
    border-radius: 1.25rem;
    padding: 1.25rem 1rem;
    text-align: center;
    margin-bottom: 1.5rem;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
  }

  .countdown-vault-header {
    font-family: monospace;
    font-size: 11px;
    color: #f2c744;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    font-weight: 800;
    margin-bottom: 0.85rem;
  }

  .countdown-grid-box {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
  }

  .countdown-cell {
    background: #1c1836;
    border: 1.5px solid rgba(255, 255, 255, 0.12);
    border-radius: 0.85rem;
    padding: 0.85rem 0.25rem;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.5);
  }

  .countdown-digit {
    font-size: clamp(1.6rem, 4.5vw, 2.5rem);
    font-weight: 900;
    color: #f2c744;
    font-family: monospace;
    line-height: 1;
  }

  .countdown-lbl {
    font-size: 9.5px;
    text-transform: uppercase;
    color: #a1a1aa;
    font-family: monospace;
    margin-top: 0.35rem;
    font-weight: 800;
  }

  .vault-cells-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .vault-unit-box {
    background: #17142b;
    border: 1.5px solid rgba(255, 255, 255, 0.14);
    border-radius: 1rem;
    padding: 1.25rem;
    box-sizing: border-box;
  }

  .pin-code-large {
    font-size: 1.5rem;
    font-weight: 900;
    font-family: monospace;
    letter-spacing: 0.2em;
    color: #18181b;
    background: #f2c744;
    padding: 0.25rem 0.75rem;
    border-radius: 0.5rem;
    border: 1.5px solid #18181b;
    display: inline-block;
  }

  .timeline-metrics-box {
    display: flex;
    justify-content: space-between;
    font-size: 11.5px;
    font-family: monospace;
    color: #a1a1aa;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 1rem 0;
    margin-bottom: 1.5rem;
    font-weight: 700;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .timeline-metrics-box span {
    color: #ffffff;
    font-weight: 800;
  }

  .renewal-options-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
  }

  .renewal-card-store,
  .renewal-card-wa {
    background: #17142b;
    border: 1.5px solid rgba(255, 255, 255, 0.15);
    border-radius: 1.15rem;
    padding: 1.35rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 220px;
    box-shadow: 0 6px 20px rgba(0,0,0,0.4);
    box-sizing: border-box;
  }

  .btn-renewal-wa {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    padding: 0.85rem 1rem;
    border-radius: 0.75rem;
    background: #25D366;
    border: 1.5px solid #1ebe5d;
    color: #ffffff !important;
    font-family: monospace;
    font-size: 11px;
    font-weight: 900;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: all 0.2s ease;
    box-shadow: 0 4px 14px rgba(37, 211, 102, 0.25);
    cursor: pointer;
    box-sizing: border-box;
  }

  .btn-renewal-wa:hover {
    background: #1ebe5d;
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(37, 211, 102, 0.35);
  }

  .btn-action-ghost {
    background: #1c1836;
    border: 1.5px solid rgba(255, 255, 255, 0.2);
    color: #ffffff;
    border-radius: 0.65rem;
    cursor: pointer;
    transition: background 0.15s, border-color 0.15s;
  }

  .btn-action-ghost:hover {
    background: #28224d;
    border-color: #f2c744;
  }

  @media only screen and (max-width: 767px) {
    .matrix-content-wrapper {
      padding: 0.5rem 0.5rem 2rem 0.5rem !important;
    }

    .hero-process_divider {
      margin-bottom: 1.25rem !important;
      padding-bottom: 0.5rem !important;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
    }

    .hero-process_divider-text {
      color: #71717a !important;
    }

    .toolbar-wrapper {
      flex-direction: column !important;
      padding: 1rem !important;
      gap: 10px !important;
      margin-bottom: 1.5rem !important;
    }

    .search-ctrl-input {
      width: 100% !important;
      height: 48px !important;
      font-size: 13.5px !important;
    }

    .btn-gold-cta {
      width: 100% !important;
      height: 48px !important;
    }

    .telemetry-card-vault {
      padding: 1.15rem 0.95rem !important;
      border-radius: 1.15rem !important;
      margin-bottom: 2rem !important;
    }

    .vault-cells-row {
      grid-template-columns: 1fr !important;
      gap: 10px !important;
    }

    .renewal-options-grid {
      grid-template-columns: 1fr !important;
      gap: 12px !important;
    }

    .countdown-grid-box {
      gap: 6px !important;
    }

    .countdown-cell {
      padding: 0.75rem 0.2rem !important;
    }

    .countdown-digit {
      font-size: 1.45rem !important;
    }
  }
</style>
`;

// Clean HTML template for the main track content
const mainContentReplacement = `
  <main id="main" class="main" data-load-main="">
    <div class="matrix-content-wrapper u-container">
      
      <!-- Top Divider with Cyber Nodes -->
      <div aria-hidden="true" class="hero-process_divider" style="display:flex; justify-content:space-between; align-items:center; width:100%; margin-bottom:1.75rem; padding-bottom:0.75rem; border-bottom:1px solid rgba(255,255,255,0.1);">
        <div style="display:flex; align-items:center; gap:0.5rem;">
          <span class="hero-process_divider-text u-f1" style="font-family:monospace; font-size:11px; color:#71717a;">3D2Y</span>
        </div>
        <div style="display:flex; align-items:center; gap:0.5rem;">
          <span style="font-family:monospace; font-size:10px; color:#f2c744; font-weight:800;">LIVE TELEMETRY HUB</span>
        </div>
        <div style="display:flex; align-items:center; gap:0.5rem;">
          <span class="hero-process_divider-text u-f1" style="font-family:monospace; font-size:11px; color:#71717a;">A113</span>
        </div>
      </div>

      <!-- Telemetry Hero Header -->
      <div class="track-hero-container">
        <div class="track-badge-pill">
          <span>&#9670; TELEMETRY &#9670;</span> PUBLIC PASS VERIFICATION
        </div>
        <h1 class="track-hero-title">
          Customer Slot <span>Telemetry</span>
        </h1>
        <p class="track-hero-subtitle">
          Enter your WhatsApp number or Profile Slot ID below to retrieve your live remaining time, PIN code, and active credentials.
        </p>
      </div>

      <!-- Controls & Search Toolbar -->
      <div class="toolbar-wrapper" id="search-container-box">
        <input type="text" id="track-input" class="search-ctrl-input" placeholder="Enter WhatsApp or Slot ID (e.g. +91 9363063876)" onkeypress="if(event.key === 'Enter') executeTrackingLookup()">
        <button class="btn-gold-cta" onclick="executeTrackingLookup()">
          <span>VERIFY PASS &rarr;</span>
        </button>
      </div>

      <!-- Telemetry Result Dynamic Area -->
      <div id="tracker-result-area"></div>

    </div>
  </main>
`;

const renderFunctionReplacement = `
    function renderActiveSearchHeader() {
      const searchBox = document.getElementById('search-container-box');
      if (searchBox && activeSlot) {
        searchBox.innerHTML = 
          '<div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; width:100%; gap:0.75rem;">' +
            '<div style="display:flex; align-items:center; gap:0.75rem;">' +
              '<span style="background:#22c55e; width:8px; height:8px; border-radius:50%; display:inline-block; box-shadow:0 0 8px #22c55e;"></span>' +
              '<div style="font-family:monospace; font-size:12px; font-weight:bold; color:#ffffff;">' +
                'DEVICE LINKED: <span style="color:#f2c744;">' + (activeSlot.profile_slot || '#XBOX-01') + '</span> (' + activeSlot.customer_name + ')' +
              '</div>' +
            '</div>' +
            '<div style="display:flex; gap:0.5rem; width:100%; justify-content:flex-end;">' +
              '<button onclick="clearSavedPass()" class="btn-action-ghost" style="padding:0.5rem 1rem; font-family:monospace; font-size:11px; font-weight:bold; text-transform:uppercase;">' +
                '[ SWITCH SLOT / NEW PIN ]' +
              '</button>' +
            '</div>' +
          '</div>';
      }
    }

    function renderTelemetryView() {
      if (!activeSlot) return;
      
      let storeUrl = 'https://rakexura-store.vercel.app';
      if (activeSlot.platform && (activeSlot.platform.includes('Xbox') || activeSlot.platform.includes('PC Game Pass'))) {
        storeUrl = 'https://rakexura-store.vercel.app/games/xbox-pc-game-pass-3-months-56';
      } else if (activeSlot.platform && (activeSlot.platform.includes('GeForce') || activeSlot.platform.includes('NVIDIA'))) {
        storeUrl = 'https://rakexura-store.vercel.app/games/nvidia-geforce-now-57';
      }

      const diff = new Date(activeSlot.expiry_date).getTime() - new Date().getTime();
      const expired = diff <= 0;
      const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
      const hours = Math.max(0, Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const mins = Math.max(0, Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = Math.max(0, Math.floor((diff % (1000 * 60)) / 1000));
      const isUrgent = !expired && days < 2;

      document.getElementById('tracker-result-area').innerHTML = 
        '<div class="telemetry-card-vault">' +
          '<!-- TOP STATUS BAR -->' +
          '<div class="telemetry-top-strip">' +
            '<div class="' + (expired ? 'status-badge-expired' : isUrgent ? 'status-badge-warning' : 'status-badge-healthy') + '">' +
              '<span>●</span> ' + (expired ? 'PASS EXPIRED' : isUrgent ? 'EXPIRING SOON (<48H)' : 'ACTIVE • 100% HEALTHY') +
            '</div>' +
            '<div class="slot-id-badge">SLOT: ' + (activeSlot.profile_slot || '#XBOX-01') + '</div>' +
          '</div>' +

          '<!-- CUSTOMER & PLATFORM HEADER -->' +
          '<div class="telemetry-customer-tag">ACCOUNT HOLDER: ' + activeSlot.customer_name + '</div>' +
          '<h2 class="telemetry-platform-title">' + 
            activeSlot.platform + 
          '</h2>' +

          '<!-- TIME REMAINING COUNTDOWN BOX -->' +
          '<div class="countdown-vault-box">' +
            '<div class="countdown-vault-header">[ LIVE TIME REMAINING ]</div>' +
            (expired ? 
              '<div style="font-size:1.75rem; font-weight:900; color:#ef4444; font-family:monospace; margin:0.5rem 0;">SUBSCRIPTION ENDED</div><p style="font-size:12.5px; color:#a1a1aa; margin:0;">Please renew below to reactivate your slot immediately.</p>' :
              '<div class="countdown-grid-box">' +
                '<div class="countdown-cell"><div class="countdown-digit">' + days + '</div><div class="countdown-lbl">Days</div></div>' +
                '<div class="countdown-cell"><div class="countdown-digit">' + hours + '</div><div class="countdown-lbl">Hours</div></div>' +
                '<div class="countdown-cell"><div class="countdown-digit">' + mins + '</div><div class="countdown-lbl">Mins</div></div>' +
                '<div class="countdown-cell"><div class="countdown-digit" style="color:#4ade80;">' + secs + '</div><div class="countdown-lbl">Secs</div></div>' +
              '</div>'
            ) +
          '</div>' +

          '<!-- DEDICATED PROFILE & PIN CELLS -->' +
          '<div class="vault-cells-row">' +
            '<div class="vault-unit-box">' +
              '<div style="font-size:10px; font-family:monospace; color:#a1a1aa; text-transform:uppercase; font-weight:bold; letter-spacing:0.05em;">YOUR ASSIGNED PROFILE</div>' +
              '<div style="font-weight:900; color:#ffffff; margin-top:0.4rem; font-family:monospace; font-size:1.25rem;">' + (activeSlot.profile_slot || 'Profile Slot 01') + '</div>' +
              '<div style="font-size:11px; color:#4ade80; font-family:monospace; margin-top:0.35rem; font-weight:bold;">Protected Dedicated Slot</div>' +
            '</div>' +
            '<div class="vault-unit-box" style="display:flex; justify-content:space-between; align-items:center;">' +
              '<div>' +
                '<div style="font-size:10px; font-family:monospace; color:#a1a1aa; text-transform:uppercase; font-weight:bold; letter-spacing:0.05em;">PRIVATE PROFILE PIN</div>' +
                '<div class="pin-code-large" style="margin-top:0.35rem;">' + (isPinVisible ? (activeSlot.profile_pin || '4892') : '••••') + '</div>' +
              '</div>' +
              '<button onclick="togglePinVisibility()" class="btn-action-ghost" style="padding:0.5rem 1rem; font-family:monospace; font-size:11px; font-weight:bold;">' +
                (isPinVisible ? 'Hide PIN' : 'Reveal PIN') +
              '</button>' +
            '</div>' +
          '</div>' +

          '<!-- TIMELINE METRICS -->' +
          '<div class="timeline-metrics-box">' +
            '<div>START DATE: <span>' + new Date(activeSlot.purchase_date).toLocaleDateString() + '</span></div>' +
            '<div>VALIDITY: <span>' + activeSlot.duration_months + ' Month(s)</span></div>' +
            '<div>EXPIRES ON: <span>' + new Date(activeSlot.expiry_date).toLocaleDateString() + '</span></div>' +
          '</div>' +

          '<!-- RENEWAL & EXTENSION SECTION -->' +
          '<div style="margin-top:1.5rem;">' +
            '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; flex-wrap:wrap; gap:0.5rem;">' +
              '<div style="font-family:monospace; font-size:11px; color:#ffffff; letter-spacing:0.12em; text-transform:uppercase; font-weight:900;">' +
                '[ EXTEND / RENEW SUBSCRIPTION ]' +
              '</div>' +
              '<div style="font-family:monospace; font-size:10px; color:#4ade80; font-weight:bold; background:rgba(34,197,94,0.15); border:1px solid rgba(34,197,94,0.3); padding:0.2rem 0.5rem; border-radius:4px;">' +
                'ACTIVE RENEWAL DESK' +
              '</div>' +
            '</div>' +

            '<div class="renewal-options-grid">' +
              '<!-- OPTION 1: RAKEXURA STORE -->' +
              '<div class="renewal-card-store">' +
                '<div>' +
                  '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">' +
                    '<span style="font-family:monospace; font-size:10px; color:#a1a1aa; text-transform:uppercase; font-weight:bold;">METHOD 01 : STORE</span>' +
                    '<span style="background:#f2c744; border:1.5px solid #18181b; color:#18181b; padding:0.2rem 0.55rem; border-radius:9999px; font-family:monospace; font-size:9px; font-weight:900; letter-spacing:0.05em;">FASTEST • RECOMMENDED</span>' +
                  '</div>' +
                  '<h3 style="font-size:1.25rem; font-weight:900; color:#ffffff; margin:0 0 0.5rem 0; line-height:1.15; text-transform:uppercase;">Direct Store Renewal</h3>' +
                  '<p style="font-size:12px; color:#d4d4d8; line-height:1.55; margin:0 0 1.25rem 0;">' +
                    'Instant automated extension. Immediate slot calibration &amp; zero queue delay.' +
                  '</p>' +
                '</div>' +
                '<a href="' + storeUrl + '" target="_blank" class="btn-gold-cta" style="width:100%; justify-content:center; padding:0.85rem 1rem; text-decoration:none;">' +
                  '<span>RENEW ON STORE [INSTANT] &rarr;</span>' +
                '</a>' +
              '</div>' +

              '<!-- OPTION 2: WHATSAPP DIRECT -->' +
              '<div class="renewal-card-wa">' +
                '<div>' +
                  '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">' +
                    '<span style="font-family:monospace; font-size:10px; color:#a1a1aa; text-transform:uppercase; font-weight:bold;">METHOD 02 : SUPPORT</span>' +
                    '<span style="background:rgba(37,211,102,0.15); border:1px solid rgba(37,211,102,0.4); color:#4ade80; padding:0.2rem 0.55rem; border-radius:9999px; font-family:monospace; font-size:9px; font-weight:bold;">MANUAL SUPPORT</span>' +
                  '</div>' +
                  '<h3 style="font-size:1.25rem; font-weight:900; color:#ffffff; margin:0 0 0.5rem 0; line-height:1.15; text-transform:uppercase;">Direct Chat Renewal</h3>' +
                  '<p style="font-size:12px; color:#d4d4d8; line-height:1.55; margin:0 0 1.25rem 0;">' +
                    'Direct support desk renewal. Response may take slightly longer during peak hours.' +
                  '</p>' +
                '</div>' +
                '<a href="https://wa.me/918317416695?text=' + encodeURIComponent('Hi Rakexura Support, I want to renew my ' + activeSlot.platform + ' slot (' + (activeSlot.profile_slot || activeSlot.id) + ').') + '" target="_blank" class="btn-renewal-wa">' +
                  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="display:inline-block; vertical-align:middle; flex-shrink:0;"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.158.572 4.183 1.572 5.938l-1.572 5.89 6.06-1.589c1.701.954 3.659 1.761 5.94 1.761 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z"/></svg>' +
                  '<span>CONTACT ON WHATSAPP &rarr;</span>' +
                '</a>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>';
    }
`;

const standardFooter = `<footer data-footer-action="" data-scroll="" data-scroll-offset="10%, 0" data-scroll-class="is-inview" class="footer u-theme-dark is-inview"><div class="footer_card-wrap"><div data-footer-action-list="" class="footer_card-list"><div data-footer-action-item="" class="footer_card-item"><div class="footer_card"><div data-footer-action-length="" class="footer_card-inner"><span class="footer_card-title u-f2">Xbox Pass</span></div><span class="footer_card-bg"><span class="footer_card-bg-left"></span><span class="footer_card-bg-center"></span><span class="footer_card-bg-right"></span></span></div></div><div data-footer-action-item="" class="footer_card-item"><div class="footer_card"><div data-footer-action-length="" class="footer_card-inner"><span class="footer_card-title u-f2">GeForce NOW</span></div><span class="footer_card-bg"><span class="footer_card-bg-left"></span><span class="footer_card-bg-center"></span><span class="footer_card-bg-right"></span></span></div></div><div data-footer-action-item="" class="footer_card-item"><div class="footer_card"><div data-footer-action-length="" class="footer_card-inner"><span class="footer_card-title u-f2">Timed Slots</span></div><span class="footer_card-bg"><span class="footer_card-bg-left"></span><span class="footer_card-bg-center"></span><span class="footer_card-bg-right"></span></span></div></div><div data-footer-action-item="" class="footer_card-item"><div class="footer_card"><div data-footer-action-length="" class="footer_card-inner"><span class="footer_card-title u-f2">Private Slot</span></div><span class="footer_card-bg"><span class="footer_card-bg-left"></span><span class="footer_card-bg-center"></span><span class="footer_card-bg-right"></span></span></div></div><div data-footer-action-item="" class="footer_card-item"><div class="footer_card"><div data-footer-action-length="" class="footer_card-inner"><span class="footer_card-title u-f2">Telemetry</span></div><span class="footer_card-bg"><span class="footer_card-bg-left"></span><span class="footer_card-bg-center"></span><span class="footer_card-bg-right"></span></span></div></div></div></div><div class="footer_container u-container"><div class="footer_inner"><div class="footer_sitemap"><div class="footer_next-page"><div class="footer_next-page-action"><div class="button-default no-animation"><span class="button-default_button-container"><span class="button-default_button-text u-c1">Need Support?</span></span><span class="button-default_button-bg"></span></div></div><div class="footer_next-page-action"><a data-button-hover="" data-text="Support" href="/support" class="button-default is-yellow w-inline-block"><span class="button-default_button-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" aria-hidden="true" STYLE="--index: 0;" class="icon is-small"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 9L5 4H3V9V10V11L13 11V13H11V15H13V13H15V11L17 11V9H15V7H13V5H11V7L13 7V9H5Z" fill="currentColor"></path></svg><span data-button-hover-animation="" STYLE="--index: 1;" class="button-default_button-text u-c1">Support</span></span><span class="button-default_button-bg is-yellow no-stroke"></span></a></div></div><div class="footer_sitemap-right"><nav class="footer_links"><ul role="list" class="footer_links-list"><li class="footer_links-item"><a href="/" class="footer_link u-c1 w-inline-block"><span class="footer_link-text">Subscriptions</span></a></li><li class="footer_links-item"><a href="/validation" class="footer_link u-c1 w-inline-block"><span class="footer_link-text">Validation</span></a></li><li class="footer_links-item"><a href="/pricing" class="footer_link u-c1 w-inline-block"><span class="footer_link-text">Pricing</span></a></li><li class="footer_links-item"><a href="/support" class="footer_link u-c1 w-inline-block"><span class="footer_link-text">Support</span></a></li></ul></nav><nav class="footer_links"><ul data-footer-action-link-list="" role="list" class="footer_links-list"><li class="footer_links-item is-social"><a data-footer-action-link-item="" href="https://wa.me/918317416695" target="_blank" class="footer_link u-c1 is-social w-inline-block"><span class="footer_link-text">WhatsApp</span></a></li><li class="footer_links-item is-social"><a data-footer-action-link-item="" href="https://rakexura-store.vercel.app" target="_blank" class="footer_link u-c1 is-social w-inline-block"><span class="footer_link-text">Official Store</span></a></li><li class="footer_links-item is-social"><a data-footer-action-link-item="" href="mailto:cheappcgamesrake@gmail.com" class="footer_link u-c1 is-social w-inline-block"><span class="footer_link-text">Email Support</span></a></li></ul></nav><nav class="footer_links"><ul role="list" class="footer_links-list"><li class="footer_links-item"><a href="/terms" class="footer_link u-c1 w-inline-block"><span class="footer_link-text">Terms of Service</span></a></li><li class="footer_links-item"><a href="/privacy" class="footer_link u-c1 w-inline-block"><span class="footer_link-text">Privacy Policy</span></a></li><li class="footer_links-item"><a href="/terms" class="footer_link u-c1 w-inline-block"><span class="footer_link-text">Warranty Guide</span></a></li></ul></nav></div></div><div class="footer_action"><div class="footer_copyright u-c1">©<span data-copyright="" class="footer_copyright-year">2026</span> RAKEXURA Subscriptions • <a href="/manage" style="color:#888888; text-decoration:none; font-size:10px; margin-left:4px;" title="Admin Console">[ADMIN MATRIX]</a></div><div class="footer_action-right"><div data-digital-clock="" class="footer_time u-c1"><div class="footer_time-inner"><span data-digital-clock-hours="" class="footer_hours"><span class="footer_hours-inner"></span></span><span class="footer_colon">:</span><span data-digital-clock-minutes="" class="footer_minutes"><span class="footer_minutes-inner"></span></span></div><span class="footer_time-city">Cloud Matrix</span></div><button type="button" data-scroll-to="" data-scroll-to-href="top" data-scroll-to-offset="0" class="footer_to-top-btn"><span class="footer_to-top-btn-text u-c1">Back to top</span><span class="footer_to-top-btn-icon-wrap"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" aria-hidden="true" class="icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2L12 4L10 4V6H8V8H10V6H12V14H2V16H12H13H14L14 6H16V8H18V6H16V4L14 4V2H12Z" fill="currentColor"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" aria-hidden="true" class="icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2L12 4L10 4V6H8V8H10V6H12V14H2V16H12H13H14L14 6H16V8H18V6H16V4L14 4V2H12Z" fill="currentColor"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" aria-hidden="true" class="icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2L12 4L10 4V6H8V8H10V6H12V14H2V16H12H13H14L14 6H16V8H18V6H16V4L14 4V2H12Z" fill="currentColor"></path></svg></span></button></div></div><div class="footer_decoration"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" aria-hidden="true" class="icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 5H11V7H13V9H15V11H13V13H11V15H9V13H7V11H5V9H7V7H9V5Z" fill="currentColor"></path></svg><span class="footer_decoration-text u-f1">Y2K Design</span><div class="footer_decoration-right"><div class="footer_icon-wrap"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" aria-hidden="true" class="icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 5H11V7H13V9H15V11H13V13H11V15H9V13H7V11H5V9H7V7H9V5Z" fill="currentColor"></path></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" aria-hidden="true" class="icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 5H11V7H13V9H15V11H13V13H11V15H9V13H7V11H5V9H7V7H9V5Z" fill="currentColor"></path></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" aria-hidden="true" class="icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 5H11V7H13V9H15V11H13V13H11V15H9V13H7V11H5V9H7V7H9V5Z" fill="currentColor"></path></svg></div><span class="footer_decoration-text u-f1">3D2Y</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" aria-hidden="true" class="icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 5H11V7H13V9H15V11H13V13H11V15H9V13H7V11H5V9H7V7H9V5Z" fill="currentColor"></path></svg></div></div></div></div></footer>`;

trackTargets.forEach(targetPath => {
  if (!fs.existsSync(targetPath)) return;
  let content = fs.readFileSync(targetPath, 'utf8');

  // 0. Remove any legacy duplicate <style> tag after </head>
  content = content.replace(/<\/head>\s*<style>[\s\S]*?<\/style>/i, '</head>');

  // 1. Inject or update <style id="rakexura-track-pro-style">
  if (content.includes('<style id="rakexura-track-pro-style">')) {
    content = content.replace(/<style id="rakexura-track-pro-style">[\s\S]*?<\/style>/, trackStyleEnhancements.trim());
  } else {
    content = content.replace('</head>', trackStyleEnhancements.trim() + '\n</head>');
  }

  // 2. Replace main content block
  content = content.replace(/<main id="main"[\s\S]*?<\/main>/, mainContentReplacement.trim());

  // 3. Replace footer with standard dark footer
  content = content.replace(/<footer[\s\S]*?<\/footer>/, standardFooter.trim());

  // 4. Replace JavaScript renderTelemetryView and renderActiveSearchHeader
  content = content.replace(/function renderActiveSearchHeader\(\)[\s\S]*?setInterval\(\(\) => \{/m, renderFunctionReplacement.trim() + '\n\n    setInterval(() => {');

  // 5. Update Error card in executeTrackingLookup
  const oldErrorCard = /document\.getElementById\('tracker-result-area'\)\.innerHTML = \s*'<div style="text-align:center; padding:3\.5rem 2rem; background:#ffffff;[\s\S]*?<\/div>';/m;
  const newErrorCard = `document.getElementById('tracker-result-area').innerHTML = 
          '<div style="text-align:center; padding:2.5rem 1.5rem; background:#131126; border:1.5px solid rgba(239, 68, 68, 0.4); border-radius: 1.25rem; color:#f4f4f8; max-width:760px; margin:0 auto; box-shadow:0 10px 30px rgba(0,0,0,0.6);">' +
            '<div style="display:inline-block; background:rgba(239, 68, 68, 0.15); border:1px solid #ef4444; color:#f87171; font-family:monospace; font-size:11px; font-weight:900; padding:0.25rem 0.65rem; border-radius:9999px; margin-bottom:1rem;">[ AUTHENTICATION FAILED ]</div>' +
            '<div style="font-size:1.4rem; font-weight:900; color:#ffffff; margin-bottom:0.5rem; text-transform:uppercase;">No Active Pass Found</div>' +
            '<p style="font-size:13px; color:#d4d4d8; line-height:1.5; margin:0.5rem auto 1.5rem auto; max-width:480px;">' +
              'No active pass matches "' + key + '". Please check your 4-digit Profile PIN or Slot ID from your WhatsApp dispatch message.' +
            '</p>' +
            '<button onclick="clearSavedPass()" class="btn-action-ghost" style="padding:0.75rem 1.5rem; font-family:monospace; font-size:11px; font-weight:bold;">TRY ANOTHER PIN / SLOT</button>' +
          '</div>';`;

  if (oldErrorCard.test(content)) {
    content = content.replace(oldErrorCard, newErrorCard);
  }

  fs.writeFileSync(targetPath, content, 'utf8');
  console.log('Updated track design in:', targetPath);
});

console.log('Finished updating track design across all target mirrors!');
