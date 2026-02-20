import { action } from 'storybook/actions'
import logger from '../../../packages/element-utils/src/logger'

const errorDemo = () => {
  logger.error('这是一条 error 日志')
  action('error 日志')({ type: 'error' })
}

export default errorDemo
