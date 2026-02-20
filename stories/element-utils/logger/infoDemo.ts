import { action } from 'storybook/actions'
import logger from '../../../packages/element-utils/src/logger'

const infoDemo = () => {
  logger.info('这是一条 info 日志')
  action('info 日志')({ type: 'info' })
}

export default infoDemo
