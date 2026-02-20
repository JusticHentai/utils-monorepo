import { action } from 'storybook/actions'
import compact from '../../../packages/js-utils/src/compact'

const basicDemo = () => {
  // 移除所有假值
  const input = [0, 1, false, 2, '', 3, null, undefined, NaN]

  action('compact - 移除所有假值')({
    输入: input,
    结果: compact(input),
    被移除的假值: 'false, null, 0, "", undefined, NaN',
  })

  // 字符串 '0' 不是假值
  action('compact - 只过滤假值，不过滤 truthy 值')({
    输入: ['0', '1', '2'],
    结果: compact(['0', '1', '2']),
    说明: '字符串 "0" 是 truthy 值，不会被过滤',
  })

  // 空数组
  action('compact - 空数组')({
    结果: compact([]),
  })
}

export default basicDemo
