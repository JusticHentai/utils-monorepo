import { action } from 'storybook/actions'
import orderBy from '../../../packages/js-utils/src/orderBy'

const multiDemo = () => {
  const objects = [
    { a: 'x', b: 3 },
    { a: 'y', b: 4 },
    { a: 'x', b: 1 },
    { a: 'y', b: 2 },
  ]

  // lodash 测试: 多属性多方向
  action('orderBy - 多条件排序')({
    'orderBy(objects, ["a", "b"], ["desc", "asc"])': orderBy(objects, ['a', 'b'], ['desc', 'asc']),
    说明: '先按 a 降序，a 相同则按 b 升序',
    期望顺序: 'y/2, y/4, x/1, x/3',
  })

  // lodash 测试: 部分 order 缺省时默认 asc
  action('orderBy - 部分缺省')({
    'orderBy(objects, ["a","b"], ["desc"])': orderBy(objects, ['a', 'b'], ['desc']),
    说明: 'b 的排序方向未指定，默认升序',
  })
}

export default multiDemo