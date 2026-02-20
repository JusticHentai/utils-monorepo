import { action } from 'storybook/actions'
import padEnd from '../../../packages/js-utils/src/padEnd'

const padEndDemo = () => {
  action('padEnd 演示')({
    '默认空格填充': padEnd('abc', 6),
    '自定义字符填充': padEnd('abc', 6, '_-'),
    '不截断': padEnd('abc', 2),
  })
}

export default padEndDemo
