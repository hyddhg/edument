import createResponse from '../../createResponse'
import { Express } from 'express'
import { Request, Response } from 'express'
import { ClientType } from '.'

export default (application: Express, waitingClients: ClientType) => {
  application.route('/client').post((request: Request, response: Response) => {
    const Response = createResponse(response)
    Response.sendError(
      'Please use /client/id where you replace id with a number!',
    )
  })

  application
    .route('/client/:id')
    .post(async (request: Request, response: Response) => {
      waitingClients[request.params.id] = { response }
    })
}
