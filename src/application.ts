import dotenv from 'dotenv'
import express, { Express } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import apicache from 'apicache'
import printDebugInformationMiddleware from './middleware/printDebugInformationMiddleware'
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware'
import { LoggerType, LogLevel } from './Logger'

dotenv.config()

/**
 * Setup an application
 */
export const create = (useCache = true, Logger: LoggerType) => {
  const application: Express = express()

  /*
   * Global Middleware
   */
  application.use(helmet())
  application.use(cors())
  if (useCache) application.use(apicache.middleware())
  application.use(bodyParser.urlencoded({ extended: true }))
  application.use(bodyParser.json())
  if (Logger.logLevel === LogLevel.information) {
    application.use(errorHandlerMiddleware)
    application.use(printDebugInformationMiddleware)
  }

  return application
}

/**
 * Start to listen
 */
export const listen = (application: Express, port: string) => {
  application.listen(port, () => {
    console.log(`Listening on port ${port} using http!`)
    console.log()
  })
}
