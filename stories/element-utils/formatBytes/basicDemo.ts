import { action } from 'storybook/actions'
import formatBytes from '../../../packages/element-utils/src/formatBytes'
import { ByteUnit } from '../../../packages/element-utils/src/formatBytes/interface'

const basicDemo = () => {
  // 基础用法 - 自动选择单位
  const result1 = formatBytes(1024)
  action('1024 字节')(result1.formatted) // "1 KB"

  const result2 = formatBytes(1536)
  action('1536 字节')(result2.formatted) // "1.5 KB"

  // 指定小数位数
  const result3 = formatBytes(1536, { decimals: 0 })
  action('1536 字节（无小数）')(result3.formatted) // "2 KB"

  // 指定输出单位
  const result4 = formatBytes(1048576, { unit: ByteUnit.KB })
  action('1MB 转 KB')(result4.formatted) // "1024 KB"

  const result5 = formatBytes(1048576, { unit: ByteUnit.GB })
  action('1MB 转 GB')(result5.formatted) // "0 GB"
}

export default basicDemo
