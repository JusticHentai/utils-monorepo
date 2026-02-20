import { action } from 'storybook/actions'
import result from '../../../packages/js-utils/src/result'

const edgeCaseDemo = () => {
  action('result - 边界情况')({
    '取值': result({ a: { b: 2 } }, 'a.b'), '默认值': result({ a: 1 }, 'b.c', 'default'), '函数值': result({ a: () => 42 }, 'a')
  })
}

export default edgeCaseDemo
