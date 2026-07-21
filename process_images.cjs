const { Jimp } = require('jimp');

async function processImages() {
  const imageFiles = [
    { name: 'agenda', path: 'C:\\Users\\enriq\\.gemini\\antigravity\\brain\\6fccc173-8cfd-4f5c-8e93-de2c8965068c\\media__1784677348639.png' },
    { name: 'workas', path: 'C:\\Users\\enriq\\.gemini\\antigravity\\brain\\6fccc173-8cfd-4f5c-8e93-de2c8965068c\\media__1784677378814.png' },
    { name: 'restaurant', path: 'C:\\Users\\enriq\\.gemini\\antigravity\\brain\\6fccc173-8cfd-4f5c-8e93-de2c8965068c\\media__1784677397136.png' },
    { name: 'sports', path: 'C:\\Users\\enriq\\.gemini\\antigravity\\brain\\6fccc173-8cfd-4f5c-8e93-de2c8965068c\\media__1784677414008.png' },
    { name: 'family', path: 'C:\\Users\\enriq\\.gemini\\antigravity\\brain\\6fccc173-8cfd-4f5c-8e93-de2c8965068c\\media__1784677441668.png' }
  ];

  for (const file of imageFiles) {
    try {
      console.log(`Processing ${file.name}...`);
      const image = await Jimp.read(file.path);
      
      const width = image.bitmap.width;
      const height = image.bitmap.height;
      
      // Calculate a central crop (e.g. 70% of the image size)
      // Watermark is usually in the corner
      const cropW = Math.floor(width * 0.7);
      const cropH = Math.floor(height * 0.7);
      const cropX = Math.floor((width - cropW) / 2);
      const cropY = Math.floor((height - cropH) / 2);
      
      image.crop({ x: cropX, y: cropY, w: cropW, h: cropH });
      
      // Remove white background (convert to transparent)
      const targetColor = { r: 255, g: 255, b: 255, a: 255 }; // White
      const colorDistance = (c1, c2) => {
        return Math.sqrt(
          Math.pow(c1.r - c2.r, 2) +
          Math.pow(c1.g - c2.g, 2) +
          Math.pow(c1.b - c2.b, 2)
        );
      };

      image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
        const r = this.bitmap.data[idx + 0];
        const g = this.bitmap.data[idx + 1];
        const b = this.bitmap.data[idx + 2];
        const a = this.bitmap.data[idx + 3];

        // If it's close to white, make transparent
        if (r > 240 && g > 240 && b > 240) {
          this.bitmap.data[idx + 3] = 0; // Alpha 0
        }
      });
      
      // Autocrop to remove transparent borders
      image.autocrop();
      
      await image.write(`public/assets/icons/${file.name}.png`);
      console.log(`Saved public/assets/icons/${file.name}.png`);
    } catch (err) {
      console.error(`Error processing ${file.name}:`, err.message);
    }
  }
}

processImages();
