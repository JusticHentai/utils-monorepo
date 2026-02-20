import { action } from 'storybook/actions'
import padStart from '../../../packages/js-utils/src/padStart'

const padStartDemo = () => {
  action('padStart 演示')({
    '默认空格填充': padStart('abc', 6),
    '自定义字符填充': padStart('abc', 6, '_-'),
    '不截断': padStart('abc', 2),
  })
}

export default padStartDemo
