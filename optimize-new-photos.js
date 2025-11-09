import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const photos = [
  {
    input: 'attached_assets/IMG_0038_Original_1762661937016.jpg',
    output: 'client/public/community/hiking-group.jpg',
    alt: 'FI Collective members hiking in the mountains'
  },
  {
    input: 'attached_assets/PXL_20230827_005744272_1762661948801.jpg',
    output: 'client/public/community/indoor-group.jpg',
    alt: 'FI Collective community members gathering indoors'
  }
];

async function optimizePhotos() {
  for (const photo of photos) {
    try {
      await sharp(photo.input)
        .resize(1200, 800, { 
          fit: 'cover',
          position: 'center'
        })
        .jpeg({ quality: 85 })
        .toFile(photo.output);
      
      console.log(`✓ Optimized: ${photo.output}`);
    } catch (error) {
      console.error(`✗ Error processing ${photo.input}:`, error.message);
    }
  }
}

optimizePhotos();
