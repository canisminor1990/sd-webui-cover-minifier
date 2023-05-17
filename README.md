# Extra-Networks Cover Minifier

a simple node script to resize all kind of models’ cover to speed up extranetwrok showcase render

> default output type will change the img type to `webp`

## Install

clone this repo and install deps

```sh
npm i
```

## Usage 

change the path and size var in the `resize-cover.js` 

```js
const basePath = "D:\\stable-diffusion-webui"
const coverWidth = 300
const coverHeight = 440
```

then `npm run resize-cover` or just run `node resize-cover.js`
