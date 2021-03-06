# unipack

[![NPM version](https://img.shields.io/npm/v/unipack.svg?style=flat)](https://npmjs.com/package/unipack) [![NPM downloads](https://img.shields.io/npm/dm/unipack.svg?style=flat)](https://npmjs.com/package/unipack) [![CircleCI](https://circleci.com/gh/egoist/unipack/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/unipack/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

## Why?

You will need two webpack compilers, one is for server-side rendering, the other one is for client-side app.

## Install

```bash
yarn add unipack

# peer dependencies
yarn add webpack webpack-dev-server
```

## Usage

```js
const webpack = require('webpack')
const unipack = require('unipack')

const pack = unipack({
  serverCompiler: webpack(serverWebpackConfig)
  clientCompiler: webpack(clientWebpackConfig),
})

// Built both
pack.build()

// Run both in dev mode
// Run server compiler in watch mode
// Run client compiler with a dev server
pack.start({
  host,
  port,
  devServerOptions,
  watchOption
})

// Then you will have:
pack.devServer // express app
pack.devServerInstance // `net.Server` instance
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**unipack** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/unipack/contributors)).

> [egoist.moe](https://egoist.moe) · GitHub [@egoist](https://github.com/egoist) · Twitter [@_egoistlily](https://twitter.com/_egoistlily)
