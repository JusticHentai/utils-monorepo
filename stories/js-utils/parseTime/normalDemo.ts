import { action } from 'storybook/actions'
import parseTime from '../../../packages/js-utils/src/parseTime'

const normalDemo = () => {
  const now = Date.now()
  const result = parseTime(now)

  action('解析当前时间')(result)
}

export default normalDemo
