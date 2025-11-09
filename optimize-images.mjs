import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const inputDir = path.join(__dirname, 'attached_assets');
const outputDir = path.join(__dirname, 'attached_assets/optimized');

try {
  await mkdir(outputDir, { recursive: true });
} catch (err) {
  console.log('Output directory already exists or created');
}

const images = [
  'PXL_20210711_005445355_1762648352568.jpg',
  'PXL_20231215_193911283_1762648352569.jpg',
  'IMG_1645_1762648563943.webp',
  'IMG_3257_1762648563943.webp',
  'IMG_4549_1762648563943.webp',
  'IMG_1248_1762648563944.webp',
  'IMG_4680_1762648563944.webp',
  'IMG_6565_1762648563944.webp'
];

const outputNames = [
  'outdoor-presentation.jpg',
  'cooking-event.jpg',
  'outdoor-celebration.jpg',
  'balloon-event.jpg',
  'clothing-swap.jpg',
  'birthday-cake.jpg',
  'hiking-group.jpg',
  'outdoor-gym.jpg'
];

console.log('Optimizing images...\n');

for (let i = 0; i < images.length; i++) {
  const inputPath = path.join(inputDir, images[i]);
  const outputPath = path.join(outputDir, outputNames[i]);
  
  try {
    await sharp(inputPath)
      .resize(1200, 800, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .jpeg({
        quality: 85,
        progressive: true
      })
      .toFile(outputPath);
    
    console.log(`✓ Optimized: ${outputNames[i]}`);
  } catch (err) {
    console.error(`✗ Error optimizing ${images[i]}:`, err.message);
  }
}

console.log('\nImage optimization complete!');
