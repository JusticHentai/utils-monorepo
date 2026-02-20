import { action } from 'storybook/actions'

/**
 * outputFile/outputJson 示例
 * 输出文件，如果父目录不存在则创建
 */
const outputFileDemo = async () => {
  action('outputFile/outputJson 示例')(`
import { outputFile, outputFileSync, outputJson, outputJsonSync } from '@justichentai/node-utils'

// 输出文本文件（自动创建不存在的目录）
await outputFile('/tmp/this/path/does/not/exist/file.txt', 'hello!')

// 同步输出
outputFileSync('/tmp/this/path/does/not/exist/file.txt', 'hello!')

// 输出 JSON 文件（自动创建不存在的目录）
await outputJson('/tmp/this/path/does/not/exist/file.json', { name: 'JP' })

// 同步输出 JSON
outputJsonSync('/tmp/this/path/does/not/exist/file.json', { name: 'JP' })

// 带格式化选项
await outputJson('/tmp/data.json', { name: 'JP' }, { spaces: 2 })

// 与 writeFile/writeJson 的区别：
// outputFile/outputJson 会自动创建不存在的父目录
// writeFile/writeJson 如果父目录不存在会抛出错误
`)
}

export default outputFileDemo
