import { action } from 'storybook/actions'
import concat from '../../../packages/js-utils/src/concat'

const nestedDemo = () => {
  // 嵌套数组只展开一层
  action('concat - 嵌套数组只展开一层')({
    结果: concat([1], [2, 3], [[4, 5]]),
    说明: '[2, 3] 被展开，[[4, 5]] 展开为 [4, 5]（一个嵌套数组元素）',
  })

  // 稀疏数组
  const sparse1 = new Array(1)
  const sparse2 = new Array(1)
  const result = concat(sparse1, sparse2)
  action('concat - 稀疏数组当作密集数组')({
    结果: result,
    长度: result.length,
    '0 in result': 0 in result,
    说明: '稀疏数组的空位被当作 undefined',
  })
}

export default nestedDemo
