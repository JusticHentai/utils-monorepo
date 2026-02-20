import { action } from 'storybook/actions'
import logger from '../../../packages/element-utils/src/logger'

const debugDemo = () => {
  logger.debug('这是一条 debug 日志')
  action('debug 日志')({ type: 'debug' })
}

export default debugDemo
