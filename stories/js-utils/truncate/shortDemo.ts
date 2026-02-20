import { action } from 'storybook/actions'
import truncate from '../../../packages/js-utils/src/truncate'

const shortDemo = () => {
  // 长度等于 maxLength 不截断
  action('truncate - 长度等于 maxLength 不截断')({
    输入: '1234567890',
    maxLength: 10,
    结果: truncate({ str: '1234567890', maxLength: 10 }),
  })

  // 长度小于 maxLength 不截断
  action('truncate - 长度小于 maxLength 不截断')({
    输入: 'short',
    maxLength: 10,
    结果: truncate({ str: 'short', maxLength: 10 }),
  })

  // 空字符串
  action('truncate - 空字符串')({
    输入: '',
    maxLength: 10,
    结果: truncate({ str: '', maxLength: 10 }),
  })
}

export default shortDemo
