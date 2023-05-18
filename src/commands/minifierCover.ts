import chalk from 'chalk';
import fs from 'fs';
import { resolve } from 'path';
import sharp from 'sharp';
import log from '../utils/log.js';
const convertToWebp = async ({
  path,
  coverWidth = 300,
  coverHeight = 400,
  imgType = 'webp',
}: {
  path: string;
  coverWidth: number;
  coverHeight: number;
  imgType: 'webp' | 'png' | 'jpg';
}) => {
  const exist = fs.existsSync(path);

  if (!exist) {
    log.error(new Error(`Can't find ${chalk.red(path)}`));
    return;
  }

  log.waitting(`Minifier cover in ${chalk.gray(path)}`);

  const files = await fs.promises.readdir(path);

  for (const file of files) {
    const filePath = resolve(path, file);
    const stats = await fs.promises.stat(filePath);
    if (stats.isDirectory()) {
      await convertToWebp({ path: filePath, coverWidth, coverHeight, imgType });
    } else {
      const oldeSize = stats.size;
      const ext = file.split('.').pop().toLowerCase();
      if (ext === 'png' || ext === 'jpg' || ext === 'webp') {
        const image = sharp(filePath);
        const metadata = await image.metadata();
        if (
          metadata.width === coverWidth &&
          metadata.height === coverHeight &&
          metadata.format === imgType
        ) {
          continue;
        }
        const newFilePath = filePath.replace(/\.(png|jpg|webp)$/, `.${imgType}`);

        switch (imgType) {
          case 'png':
            await image.resize(coverWidth, coverHeight).png().toFile(newFilePath);
            break;
          case 'jpg':
            await image.resize(coverWidth, coverHeight).jpeg().toFile(newFilePath);
            break;
          case 'webp':
            await image.resize(coverWidth, coverHeight).webp().toFile(newFilePath);
            break;
        }

        const newStats = await fs.promises.stat(newFilePath);
        const newSize = newStats.size;

        log.success(`${oldeSize} > ${newSize}`, newFilePath);

        await fs.promises.unlink(filePath);
      }
    }
  }
};

export default convertToWebp;
