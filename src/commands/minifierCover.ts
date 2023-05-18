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
}): Promise<number> => {
  let minifierSize = 0;

  const exist = fs.existsSync(path);

  if (!exist) {
    log.error(`Can't find ${chalk.red(path)}`);
    return 0;
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
      // @ts-ignore
      const ext = file.split('.').pop().toLowerCase();
      if (!['png', 'jpg', 'jpeg', 'webp'].includes(ext)) continue;

      const image = sharp(filePath);
      const metadata = await image.metadata();
      if (
        metadata.width === coverWidth &&
        metadata.height === coverHeight &&
        metadata.format === (imgType === 'jpg' ? 'jpeg' : imgType)
      ) {
        continue;
      }

      const newFilePath = filePath.replace(/\.(png|jpg|webp)$/, `.${imgType}`);
      const newFilePathTemp = newFilePath + '.tmp';

      switch (imgType) {
        case 'png':
          await image.resize(coverWidth, coverHeight).png().toFile(newFilePathTemp);
          break;
        case 'jpg':
          await image.resize(coverWidth, coverHeight).jpeg().toFile(newFilePathTemp);
          break;
        case 'webp':
          await image.resize(coverWidth, coverHeight).webp().toFile(newFilePathTemp);
          break;
      }

      await image.destroy();

      try {
        await fs.promises.unlink(filePath);

        await fs.promises.rename(newFilePathTemp, newFilePath);

        const newStats = await fs.promises.stat(newFilePath);

        const newSize = newStats.size;

        log.success(
          chalk.bgGreen.black(`[Minifier to ${Math.floor((newSize / oldeSize) * 100)}%]`),
          newFilePath,
        );

        minifierSize += oldeSize - newSize;
      } catch (e: any) {
        log.warn(e.message);
        await fs.promises.unlink(newFilePathTemp);
      }
    }
  }
  return minifierSize;
};

export default convertToWebp;
