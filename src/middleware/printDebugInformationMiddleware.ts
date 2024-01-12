import { Request, Response, NextFunction } from 'express'

/**
 * Print Debug Information Middleware
 */
const printDebugInformationMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  console.info('')
  console.info('+----------------------')
  console.info('|', request.method)
  console.info('|', request.path)
  console.info('|', request.body)
  console.info('|')
  next()
}

export default printDebugInformationMiddleware
