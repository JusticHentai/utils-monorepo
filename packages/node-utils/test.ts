import { log } from './src'

const test = async () => {
  log.info('infotest')
  log.debug('infotest')
  log.warn('infotest')
  log.error('infotest')
}

test()
