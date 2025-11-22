//severalissues with vercel bui;d,so using custom build script
const fs = require('fs');
const path = require('path');

console.log('Starting build process...');

// Create dist directory if it doesn't exist
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// Copy index.html
fs.copyFileSync('index.html', 'dist/index.html');
console.log('✓ Copied index.html');

// Create assets directory
const assetsDir = 'dist/assets';
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// Since we're using CDN, we don't need to process CSS/JS
// The React app will be served directly from source files

console.log('✓ Build completed successfully!');
console.log('✓ Your app is ready for deployment!');