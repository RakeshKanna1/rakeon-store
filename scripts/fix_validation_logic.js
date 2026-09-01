const fs = require('fs');

const validationFiles = [
  'validation.html',
  'public/validation.html',
  'validation/index.html',
  'public/validation/index.html',
  'public/showcase/validation.html',
  'public/showcase/validation/index.html'
];

const newValidationSection = `
<section id="validator-section" class="validator-section">
  <div class="validator-terminal">
    <div class="validator-terminal-header">
      <span style="font-weight: 800; color: #18181b;">[ KEY VALIDATION &amp; SECURITY PROTOCOL ]</span>
      <span>STATUS: <strong style="color: #15803d;">LIVE VALIDATION</strong> &bull; ZERO BAN RISK</span>
    </div>

    <h2 style="font-size: clamp(1.4rem, 4vw, 1.85rem); font-weight: 900; margin: 0 0 0.5rem; text-transform: uppercase; letter-spacing: -0.02em; color: #18181b;">Track &amp; Verify Your Subscription</h2>
    <p style="font-size: 14px; color: #4b4946; margin: 0 0 1.25rem; line-height: 1.5; max-width: 750px;">
      Enter your WhatsApp Number or Slot ID to check your active pass, remaining validity, countdown, and warranty status.
    </p>

    <div class="validator-input-group">
      <input id="val-key-input" type="text" class="validator-input" placeholder="Enter WhatsApp Number or Slot ID (e.g. 9876543210 or #XBOX-SLOT-01)..." onkeydown="if(event.key==='Enter') runKeyValidation();">
      <button id="val-submit-btn" onclick="runKeyValidation()" class="btn-primary-rakexura">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true" class="icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 9L5 4H3V9V10V11L13 11V13H11V15H13V13H15V11L17 11V9H15V7H13V5H11V7L13 7V9H5Z" fill="currentColor"></path></svg>
        <span>Verify Slot</span>
      </button>
    </div>
    
    <div style="font-family: monospace; font-size: 11px; color: #787571; margin-top: 0.65rem; display: flex; align-items: center; gap: 6px;">
      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 20 20" fill="none" aria-hidden="true" style="flex-shrink: 0; color: currentColor;"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 3c.69 0 1.25.56 1.25 1.25S10.69 7.5 10 7.5s-1.25-.56-1.25-1.25S9.31 5 10 5zm1.5 9h-3v-1.5h1V10h-1V8.5h2v4.5h1V14z" fill="currentColor"></path></svg>
      <span>Accepted: WhatsApp number (e.g. 9876543210) or Slot ID (e.g. #XBOX-SLOT-01).</span>
    </div>

    <!-- Loading State -->
    <div id="val-loading" style="display: none; text-align: center; padding: 2.5rem 1rem; font-family: monospace; color: #787571;">
      <div style="font-size: 12px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: #18181b;">
        [ CONNECTING TO SECURE REGISTRY NODE... ]
      </div>
      <div style="font-size: 11px; margin-top: 0.35rem; color: #787571;">Verifying slot authentication &amp; telemetry status...</div>
    </div>

    <!-- SUCCESS: Verified Slot Result Card -->
    <div id="val-result-card" class="validator-result-card" style="display: none; margin-top: 1.5rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 1.25rem; border-bottom: 1px solid rgba(24,24,27,0.08); padding-bottom: 0.85rem;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <span id="res-status-badge" class="status-badge-verified">&#10003; 100% GENUINE &amp; ACTIVE</span>
          <span id="res-key-label" style="font-family: monospace; font-size: 13px; font-weight: 800; color: #18181b;">SLOT: #XBOX-SLOT-01</span>
        </div>
        <span style="font-family: monospace; font-size: 11.5px; color: #15803d; font-weight: 700;">LIVE TELEMETRY SYNCED</span>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
        <div style="background: #ffffff; border: 1.5px solid #18181b; border-radius: 0.75rem; padding: 14px 16px;">
          <div style="font-size: 10.5px; font-family: monospace; color: #787571; text-transform: uppercase;">Subscription Plan</div>
          <div id="res-pass-title" style="font-size: 14.5px; font-weight: 900; color: #18181b; margin-top: 4px;">Xbox Game Pass Ultimate</div>
        </div>
        <div style="background: #ffffff; border: 1.5px solid #18181b; border-radius: 0.75rem; padding: 14px 16px;">
          <div style="font-size: 10.5px; font-family: monospace; color: #787571; text-transform: uppercase;">Validity Status</div>
          <div id="res-expiry-val" style="font-size: 14.5px; font-weight: 900; color: #15803d; margin-top: 4px;">Active</div>
        </div>
        <div style="background: #ffffff; border: 1.5px solid #18181b; border-radius: 0.75rem; padding: 14px 16px;">
          <div style="font-size: 10.5px; font-family: monospace; color: #787571; text-transform: uppercase;">PIN Guard Isolation</div>
          <div style="font-size: 14.5px; font-weight: 900; color: #15803d; margin-top: 4px;">&#10003; 100% Dedicated Slot</div>
        </div>
        <div style="background: #ffffff; border: 1.5px solid #18181b; border-radius: 0.75rem; padding: 14px 16px;">
          <div style="font-size: 10.5px; font-family: monospace; color: #787571; text-transform: uppercase;">Warranty Guarantee</div>
          <div style="font-size: 14.5px; font-weight: 900; color: #18181b; margin-top: 4px;">&#10003; Lifetime Replacement Active</div>
        </div>
      </div>

      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <a id="res-track-link" href="/track" class="btn-primary-rakexura" style="font-size: 11.5px; padding: 10px 18px;">
          <span>Open Live Telemetry &rarr;</span>
        </a>
        <a href="https://wa.me/918317416695?text=Hi%20Rakexura%20Team%2C%20I%20am%20validating%20my%20pass%20and%20need%20assistance." target="_blank" class="btn-secondary-rakexura" style="font-size: 11.5px; padding: 10px 18px;">
          <span>WhatsApp VIP Support</span>
        </a>
      </div>
    </div>

    <!-- ERROR: Unrecognized / Not Found Result Card -->
    <div id="val-error-card" class="validator-result-card" style="display: none; margin-top: 1.5rem; border: 1.5px solid #dc2626; background: #fff5f5;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 1rem; border-bottom: 1px solid rgba(220,38,38,0.15); padding-bottom: 0.85rem;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="background: #dc2626; color: #ffffff; padding: 4px 10px; border-radius: 0.35rem; font-family: monospace; font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.05em;">&#10005; NO ACTIVE SLOT FOUND</span>
          <span id="err-key-label" style="font-family: monospace; font-size: 13px; font-weight: 800; color: #dc2626;">"UNKNOWN"</span>
        </div>
        <span style="font-family: monospace; font-size: 11.5px; color: #dc2626; font-weight: 700;">UNRECOGNIZED KEY</span>
      </div>

      <p style="font-size: 13.5px; color: #7f1d1d; margin: 0 0 1.25rem; line-height: 1.5;">
        We could not find an active subscription slot matching this identifier. If you recently completed payment, slot provisioning takes up to 60 seconds. Otherwise, please check your WhatsApp order reference or connect directly with our support team.
      </p>

      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <a id="err-whatsapp-link" href="https://wa.me/918317416695" target="_blank" class="btn-primary-rakexura" style="font-size: 11.5px; padding: 10px 18px; background-color: #dc2626 !important; color: #ffffff !important; border-color: #991b1b !important;">
          <span>Contact WhatsApp Support &rarr;</span>
        </a>
        <a href="/pricing" class="btn-secondary-rakexura" style="font-size: 11.5px; padding: 10px 18px;">
          <span>Browse Available Plans</span>
        </a>
      </div>
    </div>

  </div>
</section>

<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script id="rakexura-real-validator-script">
  (function() {
    const SUPABASE_URL = 'https://cwvfgxdhearouclomjeq.supabase.co';
    const SUPABASE_KEY = 'sb_publishable_xkeb5PPKakTH5qQvPQllBA_eZDAHqKK';
    let supabaseClient = null;

    function getClient() {
      if (!supabaseClient && window.supabase) {
        supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
      }
      return supabaseClient;
    }

    window.runKeyValidation = async function() {
      const input = document.getElementById('val-key-input');
      const rawKey = (input ? input.value : '').trim();
      const loadingEl = document.getElementById('val-loading');
      const resultCard = document.getElementById('val-result-card');
      const errorCard = document.getElementById('val-error-card');
      const submitBtn = document.getElementById('val-submit-btn');

      if (!rawKey) {
        if (input) {
          input.focus();
          input.style.borderColor = '#dc2626';
          setTimeout(() => { input.style.borderColor = ''; }, 2000);
        }
        return;
      }

      // Show loading
      if (loadingEl) loadingEl.style.display = 'block';
      if (resultCard) resultCard.style.display = 'none';
      if (errorCard) errorCard.style.display = 'none';
      if (submitBtn) submitBtn.disabled = true;

      try {
        const client = getClient();
        let slot = null;

        if (client) {
          const cleanNum = rawKey.replace(/[^0-9]/g, '');
          let query = client.from('subscriptions').select('*');

          if (rawKey.length === 36 && rawKey.includes('-')) {
            query = query.eq('id', rawKey);
          } else if (cleanNum.length === 4 && rawKey.length === 4) {
            query = query.eq('profile_pin', cleanNum);
          } else if (rawKey.startsWith('#') || rawKey.toUpperCase().includes('SLOT') || rawKey.toUpperCase().includes('PCGP') || rawKey.toUpperCase().includes('GFN') || rawKey.toUpperCase().includes('XBOX') || rawKey.toUpperCase().includes('PASS')) {
            query = query.ilike('profile_slot', '%' + rawKey + '%');
          } else if (cleanNum.length >= 7) {
            query = query.ilike('whatsapp', '%' + cleanNum + '%');
          } else {
            query = query.or('profile_slot.ilike.%' + rawKey + '%,customer_name.ilike.%' + rawKey + '%,profile_pin.eq.' + rawKey);
          }

          const { data, error } = await query.order('expiry_date', { ascending: false }).limit(1);
          if (!error && data && data.length > 0) {
            slot = data[0];
          }
        }

        if (loadingEl) loadingEl.style.display = 'none';
        if (submitBtn) submitBtn.disabled = false;

        if (slot) {
          // Found real slot!
          const slotName = slot.profile_slot || rawKey;
          const platformName = slot.platform || 'Subscription Pass';

          let timeText = 'Active';
          if (slot.expiry_date) {
            const diff = new Date(slot.expiry_date).getTime() - Date.now();
            if (diff > 0) {
              const days = Math.floor(diff / (1000 * 60 * 60 * 24));
              timeText = days > 0 ? (days + ' Days Remaining') : 'Expiring Today';
            } else {
              timeText = 'Expired';
            }
          }

          document.getElementById('res-key-label').innerText = 'SLOT: ' + slotName.toUpperCase();
          document.getElementById('res-pass-title').innerText = platformName;
          document.getElementById('res-expiry-val').innerText = timeText;
          document.getElementById('res-track-link').href = '/track?slot=' + encodeURIComponent(slotName);

          if (resultCard) resultCard.style.display = 'block';
        } else {
          // Wrong key / not found
          document.getElementById('err-key-label').innerText = '"' + rawKey + '"';
          document.getElementById('err-whatsapp-link').href = 'https://wa.me/918317416695?text=' + encodeURIComponent('Hi Rakexura Team, my subscription slot key (' + rawKey + ') is showing not found on the validator. Could you assist?');
          if (errorCard) errorCard.style.display = 'block';
        }
      } catch (err) {
        if (loadingEl) loadingEl.style.display = 'none';
        if (submitBtn) submitBtn.disabled = false;
        if (errorCard) {
          document.getElementById('err-key-label').innerText = '"' + rawKey + '"';
          errorCard.style.display = 'block';
        }
      }
    };

    // Auto-run if query param ?key= or ?slot= exists
    document.addEventListener('DOMContentLoaded', function() {
      var params = new URLSearchParams(window.location.search);
      var queryKey = params.get('key') || params.get('slot');
      if (queryKey) {
        var input = document.getElementById('val-key-input');
        if (input) {
          input.value = queryKey;
          runKeyValidation();
        }
      }
    });
  })();
</script>
`;

validationFiles.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');

  // Match the entire existing <section id="validator-section" ... </script>
  const matchRegex = /<section id="validator-section"[\s\S]*?<\/script>/m;
  if (matchRegex.test(content)) {
    content = content.replace(matchRegex, newValidationSection.trim());
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated real validator in: ${file}`);
  } else {
    console.warn(`Could not find validator section in: ${file}`);
  }
});

console.log("Finished updating validation logic across all files!");
