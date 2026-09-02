/**
 * RAKEXURA Subscriptions - Master Platform Synchronizer
 * 
 * Synchronizes:
 * 1. Authentic 3-card pricing plans & duration engine across all pricing pages and index targets
 * 2. Support page compact spacing and action grouping
 * 3. Unified high-contrast cyber dark theme & base enhancements across all stylesheets
 */

const { execSync } = require('child_process');
const path = require('path');

console.log('====================================================');
console.log('  RAKEXURA MASTER PLATFORM SYNC');
console.log('====================================================\n');

try {
  console.log('[1/8] Syncing authentic 3-card plans to all targets...');
  execSync('node scripts/apply_authentic_3card_plans.js', { stdio: 'inherit' });

  console.log('\n[2/8] Ensuring authentic intro section on homepage...');
  execSync('node scripts/restore_intro_section.js', { stdio: 'inherit' });

  console.log('\n[2/3] Syncing support layout & spacing...');
  execSync('node scripts/fix_support_spacing.js', { stdio: 'inherit' });

  console.log('\n[3/4] Syncing real slot validator logic...');
  execSync('node scripts/fix_validation_logic.js', { stdio: 'inherit' });

  console.log('\n[4/5] Syncing harmonious dark theme & base stylesheets...');
  execSync('node scripts/fix_dark_mode_colors.js', { stdio: 'inherit' });

  console.log('\n[5/6] Syncing perfected mobile hero design across HTML templates...');
  execSync('node scripts/fix_mobile_hero_design.js', { stdio: 'inherit' });

  console.log('\n[6/8] Syncing bulletproof mobile menu dialog across all pages...');
  execSync('node scripts/fix_missing_menu_dialog.js', { stdio: 'inherit' });

  console.log('\n[7/8] Syncing perfected telemetry tracking design & countdown HUD...');
  execSync('node scripts/fix_track_design.js', { stdio: 'inherit' });

  console.log('\n[8/8] Patching app.js runtime stability...');
  execSync('node scripts/patch_app_js.js', { stdio: 'inherit' });

  console.log('\n====================================================');
  console.log('  ALL TARGETS SYNCHRONIZED SUCCESSFULLY!');
  console.log('====================================================');
} catch (err) {
  console.error('\nSync failed:', err.message);
  process.exit(1);
}
