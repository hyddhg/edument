import { Express, Request, Response } from 'express'
import clientRoute from './clientRoute'
import createResponse from '../../createResponse'
import webhookRoute from './webhookRoute'

export type ClientType = Record<string, { response: Response }>

const waitingClients: ClientType = {}

export default (application: Express) => {
  application.route('/').get((request: Request, response: Response) => {
    const Response = createResponse(response)
    Response.sendError('Welcome to Jonas API!')
  })
  application.route('/').post((request: Request, response: Response) => {
    const Response = createResponse(response)
    Response.sendError('Welcome to Jonas API!')
  })
  clientRoute(application, waitingClients)
  webhookRoute(application, waitingClients)
}
