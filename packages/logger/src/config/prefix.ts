import LOG_TYPE from './logType'

const PREFIX: Record<LOG_TYPE, [string, string]> = {
  INFO: ['%c[INFO]', 'color:#ffffff;background:#7ed6df'],
  DEBUG: ['%c[DEBUG]', 'color:#ffffff;background:#e056fd'],
  WARN: ['%c[WARN]', 'color:#ffffff;background:#f0932b'],
  ERROR: ['%c[ERROR]', 'color:#ffffff;background:#eb4d4b'],
  LOG: ['%c[LOG]', 'color:#ffffff;background:#535c68'],
}

export default PREFIX
