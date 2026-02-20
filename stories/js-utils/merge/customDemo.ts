import { action } from 'storybook/actions'
import merge from '../../../packages/js-utils/src/merge'
import { mergeWith } from '../../../packages/js-utils/src/merge'

const customDemo = () => {
  // mergeWith: 自定义数组合并
  const object = { a: [1, 2] }
  const other = { a: [3, 4] }

  const result = mergeWith({ ...object }, other, (objValue, srcValue) => {
    if (Array.isArray(objValue)) {
      return objValue.concat(srcValue)
    }
  })

  action('mergeWith - 数组拼接')({
    结果: result,
    说明: '自定义逻辑：数组拼接而非按索引合并',
  })

  // merge 的稀疏数组处理 (lodash 测试)
  const sparse: any[] = [1]
  sparse[2] = 3
  const merged = merge([], sparse)
  action('merge - 稀疏数组')({
    输入: sparse,
    结果: merged,
    '索引1存在': 1 in merged,
    说明: '稀疏数组被当作密集数组处理',
  })
}

export default customDemo