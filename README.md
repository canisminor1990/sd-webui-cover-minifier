<a name="readme-top"></a>

<div align="center">

<h1>✂️ Cover Minifier</h1>

A CLI minifier tool is available for Extra-Networks to improve the stability of the Diffusion WebUI. <br/>It resizes all types of model covers to accelerate the rendering process for extranetwrok showcase.

<!-- SHIELD GROUP -->

[![release][release-shield]][release-url] [![releaseDate][release-date-shield]][release-date-url] [![ciTest][ci-test-shield]][ci-test-url] [![ciRelease][ci-release-shield]][ci-release-url] <br/> [![contributors][contributors-shield]][contributors-url] [![forks][forks-shield]][forks-url] [![stargazers][stargazers-shield]][stargazers-url] [![issues][issues-shield]][issues-url]

</div>

## 📦 Installation

To install `️✂️ Cover Minifier`, run the following command:

```bash
npm install -g sd-webui-cover-minifier
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🤯 Usage

You can use the `cover-minifier` command to minifier all covers of Extra-Networks:

```shell
$ cd <your-stable-diffuision-webui-dir>
$ cover-minifier
```

### Options

Cover Minifier supports the following options:

```shell
--coverWidth,      -w   Width of minifiered cover, default 300
--coverHeight,     -h   Height of minifiered cover, default 400
--imgType,         -t   Type of minifiered cover [webp|png|jpg], default is webp
--ckptPath              Ckpt folder path, default is /models/Stable-diffusion
--loraPath              Lora folder path, default is /models/Lora
--hypernetworksPath     Hypernetworks folder path, default is /models/hypernetworks
--embeddingsPath        Embeddings folder path, default is /embeddings
--help,            -h   Print basic options
--version,         -v   Print cover-minifier installed version
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## ⌨️ Local Development

You can use Gitpod for online development:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)][gitpod-url]

Alternatively, you can clone the repository and run the following commands for local development:

```bash
$ git clone https://github.com/canisminor1990/sd-webui-cover-minifier.git
$ cd sd-webui-cover-minifier
$ npm install
$ npm start
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

---

#### 📝 License

Copyright © 2023 [CanisMinor][profile-url]. <br /> This project is [MIT](./LICENSE) licensed.

<!-- LINK GROUP -->

[profile-url]: https://github.com/canisminor1990
[issues-url]: https://github.com/canisminor1990/sd-webui-cover-minifier/issues/new/choose
[gitpod-url]: https://gitpod.io/#https://github.com/canisminor1990/sd-webui-cover-minifier

<!-- SHIELD LINK GROUP -->

[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square

<!-- release -->

[release-shield]: https://img.shields.io/npm/v/@lobehub/commit-cli?label=%F0%9F%A4%AF%20NPM
[release-url]: https://www.npmjs.com/package/@lobehub/commit-cli

<!-- releaseDate -->

[release-date-shield]: https://img.shields.io/github/release-date/canisminor1990/sd-webui-cover-minifier?style=flat
[release-date-url]: https://github.com/canisminor1990/sd-webui-cover-minifier/releases

<!-- ciTest -->

[ci-test-shield]: https://github.com/canisminor1990/sd-webui-cover-minifier/workflows/Test%20CI/badge.svg
[ci-test-url]: https://github.com/canisminor1990/sd-webui-cover-minifier/actions/workflows/test.yml

<!-- ciRelease -->

[ci-release-shield]: https://github.com/canisminor1990/sd-webui-cover-minifier/workflows/Build%20and%20Release/badge.svg
[ci-release-url]: https://github.com/canisminor1990/sd-webui-cover-minifier/actions/workflows/release.yml

<!-- contributors -->

[contributors-shield]: https://img.shields.io/github/contributors/canisminor1990/sd-webui-cover-minifier.svg?style=flat
[contributors-url]: https://github.com/canisminor1990/sd-webui-cover-minifier/graphs/contributors

<!-- forks -->

[forks-shield]: https://img.shields.io/github/forks/canisminor1990/sd-webui-cover-minifier.svg?style=flat
[forks-url]: https://github.com/canisminor1990/sd-webui-cover-minifier/network/members

<!-- stargazers -->

[stargazers-shield]: https://img.shields.io/github/stars/canisminor1990/sd-webui-cover-minifier.svg?style=flat
[stargazers-url]: https://github.com/canisminor1990/sd-webui-cover-minifier/stargazers

<!-- issues -->

[issues-shield]: https://img.shields.io/github/issues/canisminor1990/sd-webui-cover-minifier.svg?style=flat
[issues-url]: https://img.shields.io/github/issues/canisminor1990/sd-webui-cover-minifier.svg?style=flat
