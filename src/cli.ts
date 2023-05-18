import chalk from 'chalk';
import meow from 'meow';
import { resolve } from 'path';
import process from 'process';
import minifierCover from './commands/minifierCover.js';
import FLAGS_CONST from './constants/flags';
import createMeowSetting from './utils/createMeowSetting';
import log from './utils/log.js';

const { help, flags } = createMeowSetting(FLAGS_CONST);

meow(help, {
  importMeta: import.meta,
  flags,
});

const basePath = process.cwd();
const coverWidth = 300;
const coverHeight = 440;
const imgType = 'webp';
const ckptPath = resolve(basePath, 'models/Stable-diffusion');
const loraPath = resolve(basePath, 'models/Lora');
const hypernetworksPath = resolve(basePath, 'models/hypernetworks');
const embeddingsPath = resolve(basePath, 'embeddings');

const run = async () => {
  log.info(chalk.blue('----------------------------'));
  log.info(chalk.blue('----- Stable-diffusion -----'));
  log.info(chalk.blue('----------------------------'));
  minifierCover({
    path: ckptPath,
    coverHeight,
    coverWidth,
    imgType,
  });
  log.info(chalk.blue('----------------------------'));
  log.info(chalk.blue('----- Lora -----------------'));
  log.info(chalk.blue('----------------------------'));
  minifierCover({
    path: loraPath,
    coverHeight,
    coverWidth,
    imgType,
  });
  log.info(chalk.blue('----------------------------'));
  log.info(chalk.blue('----- Hypernetworks --------'));
  log.info(chalk.blue('----------------------------'));
  minifierCover({
    path: hypernetworksPath,
    coverHeight,
    coverWidth,
    imgType,
  });
  log.info(chalk.blue('----------------------------'));
  log.info(chalk.blue('----- Embeddings -----------'));
  log.info(chalk.blue('----------------------------'));
  minifierCover({
    path: embeddingsPath,
    coverHeight,
    coverWidth,
    imgType,
  });
};

run();
