import { action } from 'storybook/actions'
import without from '../../../packages/js-utils/src/without'

const withoutDemo = () => {
  // 基础排除
  action('without - 排除 1, 2')({
    输入: [2, 1, 2, 3],
    结果: without([2, 1, 2, 3], 1, 2),
  })

  // 严格相等 - 对象引用
  const obj1 = { a: 1 }
  const obj2 = { b: 2 }
  const arr = [obj1, obj2]
  action('without - 严格相等（新对象不匹配）')({
    输入: arr,
    '排除 { a: 1 }（新对象）': without(arr, { a: 1 } as any),
    '排除 obj1（同引用）': without(arr, obj1),
  })

  // 移除所有出现
  action('without - 移除所有出现')({
    输入: [1, 2, 3, 1, 2, 3],
    结果: without([1, 2, 3, 1, 2, 3], 1, 2),
  })

  // 不修改原数组
  const original = [1, 2, 3, 4]
  const result = without(original, 2, 4)
  action('without - 不修改原数组')({
    原数组: original,
    结果: result,
    是否新引用: result !== original,
  })

  // 空数组
  action('without - 空数组')(without([], 1, 2))
}

export default withoutDemo
