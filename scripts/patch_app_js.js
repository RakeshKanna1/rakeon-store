const fs = require('fs');

const files = [
  'scripts/app.js',
  'public/scripts/app.js',
  'public/showcase/scripts/app.js'
];

files.forEach(f => {
  if (!fs.existsSync(f)) return;
  let content = fs.readFileSync(f, 'utf8');

  // Guard Xo constructor against null this.dialog
  const target = 'this.dialog=document.querySelector("[data-menu-dialog]"),this.dialogClose=this.dialog.querySelector("[data-menu-close]"),this.dialogBackdrop=this.dialog.querySelector("[data-menu-backdrop]"),this.hider=this.dialog.querySelector("[data-menu-hider]")';
  
  const replacement = 'this.dialog=document.querySelector("[data-menu-dialog]");if(!this.dialog)return;this.dialogClose=this.dialog.querySelector("[data-menu-close]"),this.dialogBackdrop=this.dialog.querySelector("[data-menu-backdrop]"),this.hider=this.dialog.querySelector("[data-menu-hider]")';

  if (content.includes(target)) {
    content = content.replace(target, replacement);
    fs.writeFileSync(f, content, 'utf8');
    console.log('Successfully patched Xo in:', f);
  } else {
    console.log('Target not found or already patched in:', f);
  }
});
