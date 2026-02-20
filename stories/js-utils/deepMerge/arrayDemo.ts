import { action } from 'storybook/actions'
import deepMerge from '../../../packages/js-utils/src/deepMerge'

/**
 * 数组深度合并示例
 * 演示：按索引合并，嵌套对象递归合并
 */
const arrayDemo = () => {
  const target = [1, 2, { a: 1, b: 2 }]
  const source = [10, undefined, { a: 999, c: 3 }, 4]

  action('target 原始数组')([...target])
  action('source 源数组')([...source])

  const merged = deepMerge(target, source)

  // 结果：[10, 2, { a: 999, b: 2, c: 3 }, 4]
  // 索引 0：source 覆盖 (1 → 10)
  // 索引 1：source 为 undefined，保留 target (2)
  // 索引 2：对象递归合并，a 被覆盖，b 保留，c 新增
  // 索引 3：target 无此索引，使用 source (4)
  action('合并结果（按索引合并）')(merged)
}

export default arrayDemo
