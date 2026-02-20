import { action } from 'storybook/actions'
import logger from '../../../packages/element-utils/src/logger'

const warnDemo = () => {
  logger.warn('这是一条 warn 日志')
  action('warn 日志')({ type: 'warn' })
}

export default warnDemo
