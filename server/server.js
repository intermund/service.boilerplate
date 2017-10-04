import { join, resolve } from 'path'
import fs from 'fs'
import Express from 'express'
import http from 'http'
import helmet from 'helmet'
import body_parser from 'body-parser'
import logger from '../utils/logger'
import chalk from 'chalk'
import { Utils } from '../utils/utils'
import Users_API from './router'

const server = Express()

class Service {

  constructor(config) {
    this.config = config
    server.use(helmet())
    server.use(logger(this.config.LOG_LEVEL))
    server.use(body_parser.json())
    server.use(Utils.set_headers)
    server.use('/', Users_API)
  }

  listen(port) {
    try {
      return server.listen(port, () => {
        console.log(chalk.bgBlue(` Running in on port:${port} `))
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export default Service