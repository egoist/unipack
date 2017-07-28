const EventEmitter = require('events')
const DevServer = require('webpack-dev-server')

function pify(fn) {
  return (...args) => new Promise((resolve, reject) => {
    fn(...args, (err, res) => {
      if (err) return reject(err)
      resolve(res)
    })
  })
}

class UniPack extends EventEmitter {
  constructor({
    serverCompiler,
    clientCompiler
  } = {}) {
    super()
    this.serverCompiler = serverCompiler
    this.clientCompiler = clientCompiler
  }

  build() {
    return Promise.all([
      this.serverCompiler,
      this.clientCompiler
    ].map(compiler => pify(compiler.run)()))
  }

  start({
    watchOptions,
    devServerOptions,
    host,
    port
  } = {}) {
    this.serverCompiler.watch(watchOptions, (err, stats) => {
      if (!err) this.emit('compiled:server', stats)
    })

    this.devServer = new DevServer(this.clientCompiler, devServerOptions)
    this.devServerInstance = this.devServer.listen(port, host)

    return this
  }
}

module.exports = opts => new UniPack(opts)
