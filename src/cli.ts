import chalk from 'chalk';
import meow from 'meow';
import { resolve } from 'path';
import process from 'process';
import minifierCover from './commands/minifierCover.js';
import FLAGS_CONST from './constants/flags';
import createMeowSetting from './utils/createMeowSetting';
import log from './utils/log.js';

const { help, flags } = createMeowSetting(FLAGS_CONST);

const cli = meow(help, {
  importMeta: import.meta,
  flags,
});

const run = async (flags: any) => {
  const basePath = process.cwd();
  const coverWidth = flags.coverWidth || 300;
  const coverHeight = flags.coverWidth || 440;
  const imgType = flags.imgType || 'webp';
  const ckptPath = resolve(basePath, flags.ckptPath || 'models/Stable--diffusion');
  const loraPath = resolve(basePath, flags.loraPath || 'models/Lora');
  const hypernetworksPath = resolve(basePath, flags.hypernetworksPath || 'models/hypernetworks');
  const embeddingsPath = resolve(basePath, flags.embeddingsPath || 'embeddings');

  log.info(chalk.gray('------------------------------------------------------------------'));
  log.info(chalk.gray('                    ✂️ Cover Minifier Config'));
  log.info(chalk.gray('------------------------------------------------------------------'));
  log.info('coverWidth:', chalk.blue(coverWidth));
  log.info('coverHeight:', chalk.blue(coverHeight));
  log.info('basePath:', chalk.blue(basePath));
  log.info('ckptPath:', chalk.blue(ckptPath));
  log.info('loraPath:', chalk.blue(loraPath));
  log.info('hypernetworksPath:', chalk.blue(hypernetworksPath));
  log.info('embeddingsPath:', chalk.blue(embeddingsPath));
  let minifierSize = 0;
  log.info(chalk.gray('------------------------------------------------------------------'));
  log.info(chalk.gray('                           Stable--diffusion'));
  log.info(chalk.gray('------------------------------------------------------------------'));
  minifierSize += await minifierCover({
    path: ckptPath,
    coverHeight,
    coverWidth,
    imgType,
  });
  log.info(chalk.gray('------------------------------------------------------------------'));
  log.info(chalk.gray('                           Lora'));
  log.info(chalk.gray('------------------------------------------------------------------'));
  minifierSize += await minifierCover({
    path: loraPath,
    coverHeight,
    coverWidth,
    imgType,
  });
  log.info(chalk.gray('------------------------------------------------------------------'));
  log.info(chalk.gray('                           Hypernetworks'));
  log.info(chalk.gray('------------------------------------------------------------------'));
  minifierSize += await minifierCover({
    path: hypernetworksPath,
    coverHeight,
    coverWidth,
    imgType,
  });
  log.info(chalk.gray('------------------------------------------------------------------'));
  log.info(chalk.gray('                           Embeddings'));
  log.info(chalk.gray('------------------------------------------------------------------'));
  minifierSize += await minifierCover({
    path: embeddingsPath,
    coverHeight,
    coverWidth,
    imgType,
  });
  log.info(chalk.gray('------------------------------------------------------------------'));
  log.done(`Total save`, chalk.bgGreen.black(`[${(minifierSize / 1024 / 1024).toFixed(2)}MB]`));
  log.info(chalk.gray('------------------------------------------------------------------'));
};

run(cli.flags);
