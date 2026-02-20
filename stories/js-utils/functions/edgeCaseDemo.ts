import { action } from 'storybook/actions'
import functions from '../../../packages/js-utils/src/functions'

const edgeCaseDemo = () => {
  action('functions - 边界情况')({
    '获取函数名': functions({ a: () => {}, b: 1, c: () => {} }), '空对象': functions({})
  })
}

export default edgeCaseDemo
