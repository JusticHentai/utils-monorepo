import { action } from 'storybook/actions'
import truncate from '../../../packages/js-utils/src/truncate'

const truncateDemo = () => {
  // 基础截断
  action('truncate - 基础截断')({
    输入: '这是一个很长的字符串需要截断',
    maxLength: 10,
    结果: truncate({ str: '这是一个很长的字符串需要截断', maxLength: 10 }),
  })

  // 不截断：长度 <= maxLength
  action('truncate - 长度等于 maxLength 不截断')({
    输入: '1234567890',
    maxLength: 10,
    结果: truncate({ str: '1234567890', maxLength: 10 }),
  })

  action('truncate - 长度小于 maxLength 不截断')({
    输入: 'short',
    maxLength: 10,
    结果: truncate({ str: 'short', maxLength: 10 }),
  })

  // 截断为指定长度（省略号占3字符）
  action('truncate - maxLength=4 截断')({
    输入: 'hi-diddly-ho',
    maxLength: 4,
    结果: truncate({ str: 'hi-diddly-ho', maxLength: 4 }),
  })

  // 超过 maxLength 1 个字符
  action('truncate - 超过1个字符')({
    输入: '12345678901',
    maxLength: 10,
    结果: truncate({ str: '12345678901', maxLength: 10 }),
    输出长度: truncate({ str: '12345678901', maxLength: 10 }).length,
  })

  // 中文和混合字符串
  action('truncate - 中文字符串')({
    输入: '中文字符串测试内容',
    maxLength: 8,
    结果: truncate({ str: '中文字符串测试内容', maxLength: 8 }),
  })

  action('truncate - 混合字符串')({
    输入: 'Mix中英文123测试',
    maxLength: 10,
    结果: truncate({ str: 'Mix中英文123测试', maxLength: 10 }),
  })
}

export default truncateDemo
