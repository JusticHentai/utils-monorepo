import { action } from 'storybook/actions'
import deepMerge from '../../../packages/js-utils/src/deepMerge'

/**
 * 对象深度合并示例（含属性冲突）
 * 演示：嵌套对象合并 + 同名属性覆盖 + 类型推断
 */
const normalDemo = () => {
  const target = { a: 1, b: { c: 2, d: 3 }, e: 'target' }
  const source = { b: { c: 999, f: 4 }, e: 'source', g: 5 }

  action('target 原始对象')({ ...target, b: { ...target.b } })
  action('source 源对象')(source)

  // 返回类型自动推断为合并后的类型
  const merged = deepMerge(target, source)

  // 结果：{ a: 1, b: { c: 999, d: 3, f: 4 }, e: 'source', g: 5 }
  // b.c 冲突：source 覆盖 target (2 → 999)
  // e 冲突：source 覆盖 target ('target' → 'source')
  // b.d 保留，b.f 和 g 新增
  action('合并结果（注意 b.c 和 e 被覆盖）')(merged)

  // 类型推断示例：merged.g 类型为 number
  action('merged.g 类型正确推断')(merged.g)
}

export default normalDemo
