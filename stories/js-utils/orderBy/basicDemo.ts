import { action } from 'storybook/actions'
import orderBy from '../../../packages/js-utils/src/orderBy'

const basicDemo = () => {
  // lodash 测试用例的数据
  const objects = [
    { a: 'x', b: 3 },
    { a: 'y', b: 4 },
    { a: 'x', b: 1 },
    { a: 'y', b: 2 },
  ]

  // lodash 测试: 单属性 desc
  action('orderBy - 单属性降序')({
    结果: orderBy(objects, ['a'], ['desc']),
    说明: '按 a 降序: y,y,x,x',
  })

  // lodash 测试: 默认升序
  action('orderBy - 默认升序')({
    结果: orderBy(objects, ['a', 'b']),
    说明: '未指定 orders 时默认升序',
  })
}

export default basicDemo