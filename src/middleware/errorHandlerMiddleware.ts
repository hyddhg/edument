import { Request, Response, NextFunction } from 'express'
import createResponse from '../createResponse'

/**
 * Get the error message and log the error
 */
export const getApplicationErrorMessage = (error: any) => {
  switch (true) {
    case error instanceof SyntaxError:
      console.error('SyntaxError')
      console.error(error.message)
      console.error()
      return error.message
    default:
      console.error(error)
      console.error()
      return 'Unknown application error!'
  }
}

/**
 * Error Handler Middleware
 */
const errorHandlerMiddleware = (
  error: any,
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  console.log('errorHandlerMiddleware')
  if (response.headersSent) {
    return
  }

  if (error === null) {
    next()
    return
  }

  const Response = createResponse(response)
  Response.sendError(getApplicationErrorMessage(error))
}

export default errorHandlerMiddleware
