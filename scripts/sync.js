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
  console.log('[1/3] Syncing authentic 3-card plans to all targets...');
  execSync('node scripts/apply_authentic_3card_plans.js', { stdio: 'inherit' });

  console.log('\n[2/3] Syncing support layout & spacing...');
  execSync('node scripts/fix_support_spacing.js', { stdio: 'inherit' });

  console.log('\n[3/3] Syncing harmonious dark theme & base stylesheets...');
  execSync('node scripts/fix_dark_mode_colors.js', { stdio: 'inherit' });

  console.log('\n====================================================');
  console.log('  ALL TARGETS SYNCHRONIZED SUCCESSFULLY!');
  console.log('====================================================');
} catch (err) {
  console.error('\nSync failed:', err.message);
  process.exit(1);
}
