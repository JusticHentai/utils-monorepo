import { action } from 'storybook/actions'
import {
  getSupportedEntryTypes,
  supportEntryType,
} from '../../../packages/element-utils/src/supportPerformanceObserver'

const entryTypesDemo = () => {
  const supportedTypes = getSupportedEntryTypes()

  // 检测常用的 entry types
  const commonTypes = [
    'paint',
    'largest-contentful-paint',
    'first-input',
    'layout-shift',
    'longtask',
    'resource',
    'navigation',
    'event',
  ]

  const typeSupport = commonTypes.reduce(
    (acc, type) => {
      acc[type] = supportEntryType(type)
      return acc
    },
    {} as Record<string, boolean>
  )

  action('支持的 Entry Types')(supportedTypes)
  action('常用类型支持情况')(typeSupport)
}

export default entryTypesDemo
