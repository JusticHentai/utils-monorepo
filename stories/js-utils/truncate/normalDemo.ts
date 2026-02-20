import { action } from 'storybook/actions'
import truncate from '../../../packages/js-utils/src/truncate'

const normalDemo = () => {
  // 超过 maxLength 截断
  action('truncate - 基础截断')({
    输入: '这是一个很长的字符串需要截断',
    maxLength: 10,
    结果: truncate({ str: '这是一个很长的字符串需要截断', maxLength: 10 }),
  })

  // 英文截断
  action('truncate - 英文截断')({
    输入: 'hi-diddly-ho there, neighborino',
    maxLength: 24,
    结果: truncate({ str: 'hi-diddly-ho there, neighborino', maxLength: 24 }),
  })

  // maxLength=4 截断（省略号占3字符）
  action('truncate - maxLength=4 截断')({
    输入: 'hi-diddly-ho',
    maxLength: 4,
    结果: truncate({ str: 'hi-diddly-ho', maxLength: 4 }),
  })
}

export default normalDemo
