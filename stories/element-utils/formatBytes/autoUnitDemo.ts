import { action } from 'storybook/actions'
import formatBytes from '../../../packages/element-utils/src/formatBytes'

const autoUnitDemo = () => {
  // 自动选择最合适的单位
  const sizes = [
    0,
    512,
    1024,
    1024 * 1024,
    1024 * 1024 * 1024,
    1024 * 1024 * 1024 * 1024,
  ]

  const results = sizes.map((size) => {
    const result = formatBytes(size)
    return {
      bytes: size,
      formatted: result.formatted,
      unit: result.unit,
    }
  })

  action('自动单位选择示例')(results)

  // 结果示例：
  // [
  //   { bytes: 0, formatted: "0 B", unit: "B" },
  //   { bytes: 512, formatted: "512 B", unit: "B" },
  //   { bytes: 1024, formatted: "1 KB", unit: "KB" },
  //   { bytes: 1048576, formatted: "1 MB", unit: "MB" },
  //   { bytes: 1073741824, formatted: "1 GB", unit: "GB" },
  //   { bytes: 1099511627776, formatted: "1 TB", unit: "TB" },
  // ]
}

export default autoUnitDemo
