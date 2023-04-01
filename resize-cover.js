const fs = require('fs');
const sharp = require('sharp');

const basePath = "D:\\stable-diffusion-webui"
const coverWidth = 300
const coverHeight = 440

const convertToWebp = async (path) => {
  const files = await fs.promises.readdir(path);
  for (const file of files) {
    const filePath = `${path}/${file}`;
    const stats = await fs.promises.stat(filePath);
    if (stats.isDirectory()) {
      await convertToWebp(filePath);
    } else {
      const ext = file.split('.').pop().toLowerCase();
      if (ext === 'png' || ext === 'jpg' || ext === 'jpeg') {
        const image = sharp(filePath);
        const metadata = await image.metadata();
        if (metadata.width === coverWidth && metadata.height === coverHeight && metadata.format === 'webp') {
          continue;
        }
        const webpFilePath = filePath.replace(/\.(png|jpg|jpeg)$/, '.webp');
        await image.resize(coverWidth, coverHeight).webp().toFile(webpFilePath);
        console.log(webpFilePath)
        await fs.promises.unlink(filePath);
      }
    }
  }
};

console.log("Stable-diffusion")
convertToWebp(basePath + '\\models\\Stable-diffusion');

console.log("Lora")
convertToWebp(basePath + '\\models\\Lora');

console.log("hypernetworks")
convertToWebp(basePath + '\\models\\hypernetworks');

console.log("embeddings")
convertToWebp(basePath + '\\embeddings');