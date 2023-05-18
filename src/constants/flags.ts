export interface IFlags {
  [flag: string]: {
    type: 'boolean' | 'string' | 'number';
    shortFlag?: string;
    desc?: string;
  };
}

const FLAGS: IFlags = {
  coverWidth: { type: 'number', shortFlag: 'w', desc: 'Width of minifiered cover, default 300' },
  coverHeight: { type: 'number', shortFlag: 'h', desc: 'Height of minifiered cover, default 400' },
  imgType: {
    type: 'string',
    shortFlag: 't',
    desc: 'Type of minifiered cover [webp|png|jpg], default is webp',
  },
  ckptPath: { type: 'string', desc: 'Ckpt folder path, default is /models/Stable-diffusion' },
  loraPath: { type: 'string', desc: 'Lora folder path, default is /models/Lora' },
  hypernetworksPath: {
    type: 'string',
    desc: 'Hypernetworks folder path, default is /models/hypernetworks',
  },
  embeddingsPath: { type: 'string', desc: 'Embeddings folder path, default is /embeddings' },
  help: { type: 'boolean', shortFlag: 'h', desc: 'Print basic options' },
  version: { type: 'boolean', shortFlag: 'v', desc: 'Print cover-minifier installed version' },
};

export default FLAGS;
