// Regenerates binary assets from base64 sources after install.
// (GitHub text-based commits can't carry binaries cleanly, so the icon ships
//  as assets/icon.b64 and is decoded here on postinstall.)
const fs = require('fs');
const path = require('path');

const pairs = [['assets/icon.b64', 'assets/icon.png']];

for (const [src, out] of pairs) {
  try {
    const srcPath = path.join(__dirname, '..', src);
    const outPath = path.join(__dirname, '..', out);
    if (fs.existsSync(srcPath)) {
      fs.writeFileSync(outPath, Buffer.from(fs.readFileSync(srcPath, 'utf8'), 'base64'));
      console.log(`gen-assets: wrote ${out}`);
    }
  } catch (e) {
    console.warn(`gen-assets: skipped ${out} (${e.message})`);
  }
}
