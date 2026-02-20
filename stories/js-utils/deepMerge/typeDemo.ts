import { action } from 'storybook/actions'
import deepMerge from '../../../packages/js-utils/src/deepMerge'

import type { DeepMerge } from '../../../packages/js-utils/src/deepMerge/interface'

/**
 * 类型推断示例
 * 演示：DeepMerge 类型的使用和类型安全
 */
const typeDemo = () => {
  // 定义带类型的对象
  interface Target {
    name: string
    config: {
      timeout: number
      enabled: boolean
    }
  }

  interface Source {
    config: {
      timeout: number
      retries: number
    }
    extra: string
  }

  const target: Target = {
    name: 'app',
    config: { timeout: 1000, enabled: true },
  }

  const source: Source = {
    config: { timeout: 3000, retries: 3 },
    extra: 'data',
  }

  // 类型自动推断合并结果
  const merged = deepMerge(target, source)

  action('合并结果')(merged)
  // merged 类型包含所有字段：name, config.timeout, config.enabled, config.retries, extra

  // 也可以直接使用 DeepMerge 类型
  type MergedType = DeepMerge<Target, Source>
  const mergedType: MergedType = merged
  action('DeepMerge 类型')(mergedType)
}

export default typeDemo
