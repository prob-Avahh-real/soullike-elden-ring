const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const src = path.join(root, 'index.html');
const wwwDir = path.join(root, 'www');
const www = path.join(wwwDir, 'index.html');
const androidAsset = path.join(root, 'android', 'app', 'src', 'main', 'assets', 'public', 'index.html');

if (!fs.existsSync(src)) {
  console.error('❌ index.html not found');
  process.exit(1);
}

fs.mkdirSync(wwwDir, { recursive: true });
fs.copyFileSync(src, www);

if (fs.existsSync(path.dirname(androidAsset))) {
  fs.copyFileSync(src, androidAsset);
  console.log('✅ synced index.html → www/ + android/assets');
} else {
  console.log('✅ synced index.html → www/');
}
