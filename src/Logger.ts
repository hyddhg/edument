/**
 * Log level, how much log to print
 */
export enum LogLevel {
  /** Show all logging */
  information = 'information',

  /** Show errors and warnings */
  warning = 'warning',

  /** Show only errors */
  error = 'error',
}

/**
 * Colors usable with console
 * Example console.log(Colors.fg.white, Colors.bg.black, 'White test on a black background', Colors.reset)
 */
export const Colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  underscore: '\x1b[4m',
  blink: '\x1b[5m',
  reverse: '\x1b[7m',
  hidden: '\x1b[8m',

  fg: {
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
    crimson: '\x1b[38m', // Scarlet
  },
  bg: {
    black: '\x1b[40m',
    red: '\x1b[41m',
    green: '\x1b[42m',
    yellow: '\x1b[43m',
    blue: '\x1b[44m',
    magenta: '\x1b[45m',
    cyan: '\x1b[46m',
    white: '\x1b[47m',
    crimson: '\x1b[48m',
  },
}

const getLogLevel = () => {
  if (process.env.LOG_LEVEL) {
    return LogLevel[process.env.LOG_LEVEL as keyof typeof LogLevel]
  }
  return LogLevel.error
}

export type LoggerType = {
  error: (message: string, ...optionalParams: any) => void
  warning: (message: string, ...optionalParams: any) => void
  information: (message: string, ...optionalParams: any) => void
  success: (message: string, ...optionalParams: any) => void
  logLevel: LogLevel
}

const createLogger = (): LoggerType => {
  let logLevel = getLogLevel()

  const error = (message: string, ...optionalParams: any) => {
    console.error(Colors.fg.red + message, ...optionalParams, Colors.reset)
  }

  const warning = (message: string, ...optionalParams: any) => {
    if (logLevel !== LogLevel.error) {
      console.warn(
        Colors.fg.yellow + message,
        ...optionalParams,
        Colors.fg.white,
      )
    }
  }

  const information = (message: string, ...optionalParams: any) => {
    if (logLevel === LogLevel.information) {
      console.info(Colors.fg.white + message, ...optionalParams, Colors.reset)
    }
  }

  const success = (message: string, ...optionalParams: any) => {
    console.info(Colors.fg.green + message, ...optionalParams, Colors.reset)
  }

  return { error, warning, information, success, logLevel }
}

export default createLogger
