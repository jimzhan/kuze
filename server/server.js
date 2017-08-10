import Koa from 'koa'
import logger from 'winston'
import config from 'config'
import * as dekoa from 'dekoa'

export class Server extends Koa {
  constructor() {
    super()
    this.instance = null
  }

  bootstrap(views) {
    dekoa.bind(this, views, { prefix: config.prefix })
  }

  async start() {
    return new Promise(resolve => {
      this.instance = this.listen(config.port, () => {
        logger.info(`Server started at port ${config.port} ...`)
        resolve()
      })
    })
  }

  async stop() {
    logger.info('Shutting down server ...')
    if (!this.instance) {
      logger.info('Server is already stopped')
      return
    }
    return new Promise(function(resolve) {
      this.instance.close(function() {
        logger.info('Server is stopped')
        resolve()
      })
    })
  }
}
