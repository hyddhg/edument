import { Response } from 'express'

const createResponse = (response: Response) => {
  const send = (json: object) => response.json(json)

  const sendError = (message: string) => {
    console.info('')
    console.info('+------- Send error --------')
    console.info('| message', message)
    console.info('+---------------------------')

    response.json({
      type: 'error',
      message,
    })
  }

  const sendData = (message: string, data: object) =>
    response.json({
      type: 'data',
      message,
      data,
    })

  const sendStatus = (status: number, message: string) => {
    console.info('')
    console.info('+------- Send status --------')
    console.info('| status', status)
    console.info('| message', message)
    console.info('+----------------------------')

    response.status(status)
    response.send(message)
  }

  return {
    send,
    sendError,
    sendData,
    sendStatus,
  }
}

export default createResponse
