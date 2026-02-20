import { action } from 'storybook/actions'
import invoke from '../../../packages/js-utils/src/invoke'

const edgeCaseDemo = () => {
  action('invoke - 边界情况')({
    'null 对象': invoke(null as any, 'a.b'),
    '路径不存在': invoke({ a: 1 }, 'x.y.z'),
    '路径指向非函数': invoke({ a: { b: 123 } }, 'a.b'),
  })
}

export default edgeCaseDemo
