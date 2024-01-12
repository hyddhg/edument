import createResponse from '../../createResponse'
import { Express } from 'express'
import { Request, Response } from 'express'
import { ClientType } from '.'

export default (application: Express, waitingClients: ClientType) => {
  application.route('/webhook').post((request: Request, response: Response) => {
    const Response = createResponse(response)
    Response.sendError(
      'Please use /webhook/id where you replace id with a number!',
    )
  })

  application
    .route('/webhook/:id')
    .post(async (request: Request, response: Response) => {
      if (Object.hasOwn(waitingClients, request.params.id)) {
        const ResponseClient = createResponse(
          waitingClients[request.params.id].response,
        )
        delete waitingClients[request.params.id]
        ResponseClient.sendData('Sending data', request.body)

        const ResponseWebhook = createResponse(response)
        ResponseWebhook.sendStatus(200, `Response sent to ${request.url}`)
      } else {
        const ResponseWebhook = createResponse(response)
        ResponseWebhook.sendStatus(
          300,
          `id wasn't waiting for a request, ${request.url}`,
        )
      }
    })
}
