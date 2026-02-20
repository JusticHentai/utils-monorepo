import { action } from 'storybook/actions'
import unary from '../../../packages/js-utils/src/unary'

const unaryDemo = () => {
  action('unary 演示')({
    'parseInt 映射': ['6', '8', '10'].map(unary(parseInt)),
    说明: '限制函数只接受一个参数，避免 parseInt 的 radix 问题',
  })
}

export default unaryDemo
