const fs = require('fs');
const path = require('path');

const updatedTableHtml = `    <!-- Store Comparison Table -->
    <div class="pricing-compare-section" style="background: #ffffff; border: 1.5px solid #18181b; border-radius: 1.25rem; padding: clamp(1.5rem, 3vw, 2.25rem); box-shadow: 0 6px 0 #18181b; overflow-x: auto; color: #18181b;">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(24,24,27,0.1); padding-bottom: 0.85rem; margin-bottom: 1.5rem; font-family: monospace; font-size: 11.5px; color: #787571;">
        <span style="font-weight: 800; color: #18181b;">[ COMPARISON MATRIX ]</span>
        <span>AUTHENTIC STORE SPECIFICATIONS &bull; ALL SLOTS 100% ISOLATED</span>
      </div>

      <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 13.5px; color: #18181b;">
        <thead>
          <tr style="background: #faf8f5; border-bottom: 1.5px solid #18181b;">
            <th style="padding: 12px 16px; font-weight: 900; color: #18181b;">Plan Specifications</th>
            <th style="padding: 12px 16px; font-weight: 900; color: #18181b;">Xbox PC Game Pass</th>
            <th style="padding: 12px 16px; background: #f2c744; color: #18181b; font-weight: 900;">Ultimate Cloud Pass (Combo)</th>
            <th style="padding: 12px 16px; font-weight: 900; color: #18181b;">NVIDIA GeForce NOW</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(24,24,27,0.08);">
            <td style="padding: 12px 16px; color: #18181b;"><strong style="color: #18181b;">Dedicated Private PIN Slot</strong></td>
            <td style="padding: 12px 16px; color: #18181b;"><span style="color: #15803d; font-weight: 900;">✓</span> Included (Private PIN)</td>
            <td style="padding: 12px 16px; background: rgba(242, 199, 68, 0.12); font-weight: 800; color: #18181b;"><span style="color: #15803d; font-weight: 900;">✓</span> Included (Private PIN)</td>
            <td style="padding: 12px 16px; color: #18181b;"><span style="color: #15803d; font-weight: 900;">✓</span> Included (Private PIN)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(24,24,27,0.08);">
            <td style="padding: 12px 16px; color: #18181b;"><strong style="color: #18181b;">400+ PC Games Library (Xbox + EA Play)</strong></td>
            <td style="padding: 12px 16px; color: #18181b;"><span style="color: #15803d; font-weight: 900;">✓</span> Included</td>
            <td style="padding: 12px 16px; background: rgba(242, 199, 68, 0.12); font-weight: 800; color: #18181b;"><span style="color: #15803d; font-weight: 900;">✓</span> Included</td>
            <td style="padding: 12px 16px; color: #71717a;">— Not Included (BYO Games)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(24,24,27,0.08);">
            <td style="padding: 12px 16px; color: #18181b;"><strong style="color: #18181b;">NVIDIA RTX Cloud Streaming Rigs</strong></td>
            <td style="padding: 12px 16px; color: #71717a;">— Not Included</td>
            <td style="padding: 12px 16px; background: rgba(242, 199, 68, 0.12); font-weight: 800; color: #18181b;"><strong style="color: #18181b;"><span style="color: #15803d; font-weight: 900;">✓</span> Priority RTX Cloud Rigs</strong></td>
            <td style="padding: 12px 16px; color: #18181b;"><strong style="color: #18181b;"><span style="color: #15803d; font-weight: 900;">✓</span> Priority RTX Cloud Rigs</strong></td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(24,24,27,0.08);">
            <td style="padding: 12px 16px; color: #18181b;"><strong style="color: #18181b;">4K / 120FPS Cloud Cross-Play</strong></td>
            <td style="padding: 12px 16px; color: #71717a;">— (Runs on Local PC)</td>
            <td style="padding: 12px 16px; background: rgba(242, 199, 68, 0.12); font-weight: 800; color: #18181b;"><span style="color: #15803d; font-weight: 900;">✓</span> PC, Mac, Phone, Tablet, TV</td>
            <td style="padding: 12px 16px; color: #18181b;"><span style="color: #15803d; font-weight: 900;">✓</span> PC, Mac, Phone, Tablet, TV</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(24,24,27,0.08);">
            <td style="padding: 12px 16px; color: #18181b;"><strong style="color: #18181b;">EA Play &amp; Day-One Title Releases</strong></td>
            <td style="padding: 12px 16px; color: #18181b;"><span style="color: #15803d; font-weight: 900;">✓</span> All Day-One Titles</td>
            <td style="padding: 12px 16px; background: rgba(242, 199, 68, 0.12); font-weight: 800; color: #18181b;"><span style="color: #15803d; font-weight: 900;">✓</span> All Day-One Titles</td>
            <td style="padding: 12px 16px; color: #71717a;">—</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(24,24,27,0.08);">
            <td style="padding: 12px 16px; color: #18181b;"><strong style="color: #18181b;">Cloud Save &amp; Progression Isolation</strong></td>
            <td style="padding: 12px 16px; color: #18181b;"><span style="color: #15803d; font-weight: 900;">✓</span> Dedicated PIN Isolation</td>
            <td style="padding: 12px 16px; background: rgba(242, 199, 68, 0.12); font-weight: 800; color: #18181b;"><span style="color: #15803d; font-weight: 900;">✓</span> Dedicated PIN Isolation</td>
            <td style="padding: 12px 16px; color: #18181b;"><span style="color: #15803d; font-weight: 900;">✓</span> Dedicated PIN Isolation</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(24,24,27,0.08);">
            <td style="padding: 12px 16px; color: #18181b;"><strong style="color: #18181b;">Automated Dispatch &amp; Delivery</strong></td>
            <td style="padding: 12px 16px; color: #18181b;"><span style="color: #15803d; font-weight: 900;">✓</span> &lt; 60s to WhatsApp</td>
            <td style="padding: 12px 16px; background: rgba(242, 199, 68, 0.12); font-weight: 800; color: #18181b;"><span style="color: #15803d; font-weight: 900;">✓</span> &lt; 60s to WhatsApp</td>
            <td style="padding: 12px 16px; color: #18181b;"><span style="color: #15803d; font-weight: 900;">✓</span> &lt; 60s to WhatsApp</td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; color: #18181b;"><strong style="color: #18181b;">100% Replacement Warranty</strong></td>
            <td style="padding: 12px 16px; color: #18181b;"><span style="color: #15803d; font-weight: 900;">✓</span> 100% Duration Warranty</td>
            <td style="padding: 12px 16px; background: rgba(242, 199, 68, 0.12); font-weight: 800; color: #18181b;"><strong style="color: #18181b;"><span style="color: #15803d; font-weight: 900;">✓</span> 100% Duration Warranty</strong></td>
            <td style="padding: 12px 16px; color: #18181b;"><span style="color: #15803d; font-weight: 900;">✓</span> 100% Duration Warranty</td>
          </tr>
        </tbody>
      </table>
    </div>`;

const htmlTargets = [
  'pricing.html',
  'pricing/index.html',
  'public/pricing.html',
  'public/pricing/index.html',
  'public/showcase/pricing.html',
  'public/showcase/pricing/index.html',
  'index.html',
  'public/index.html',
  'public/showcase/index.html'
];

const tableRegex = /<!-- Store Comparison Table -->[\s\S]*?<div class="pricing-compare-section"[\s\S]*?<\/table>\s*<\/div>/;

htmlTargets.forEach(target => {
  const fullPath = path.resolve(__dirname, '..', target);
  if (!fs.existsSync(fullPath)) return;

  let content = fs.readFileSync(fullPath, 'utf8');
  if (tableRegex.test(content)) {
    content = content.replace(tableRegex, updatedTableHtml);
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`[HTML] Updated comparison table in: ${target}`);
  } else {
    console.warn(`[HTML] Warning: Table regex did not match in: ${target}`);
  }
});

console.log("HTML table update complete.");
