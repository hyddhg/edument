import { create, listen } from './application'
import mainRoutes from './routes/main'
import createLogger from './Logger'

const publicServer = () => {
  const Logger = createLogger()

  const useCache = process.env.CACHE === 'true'

  const application = create(useCache, Logger)
  mainRoutes(application)

  const port = process.env.PORT || '3000'
  listen(application, port)
}

const server = async () => {
  publicServer()

  console.log()
  console.log(`Mode is ${process.env.NODE_ENV}`)
  console.log(`Log level is ${process.env.LOG_LEVEL}`)
  console.log()
}

server()
