import { action } from 'storybook/actions'

/**
 * readJson/writeJson 示例
 * 读取和写入 JSON 文件
 */
const readWriteJsonDemo = async () => {
  action('readJson/writeJson 示例')(`
import { readJson, readJsonSync, writeJson, writeJsonSync } from '@justichentai/node-utils'

// 读取 JSON 文件
const data = await readJson('./package.json')
console.log(data.version)

// 同步读取
const dataSync = readJsonSync('./package.json')

// 使用 throws 选项（JSON 解析失败时不抛出错误）
const config = await readJson('./invalid.json', { throws: false })
console.log(config) // null（如果 JSON 无效）

// 写入 JSON 文件
await writeJson('./package.json', { name: 'my-package' })

// 带格式化选项
await writeJson('./package.json', { name: 'my-package' }, {
  spaces: 2,        // 缩进空格数
  EOL: '\\n',       // 行尾字符
})

// 使用 tab 缩进
await writeJson('./package.json', data, { spaces: '\\t' })

// 同步写入
writeJsonSync('./package.json', { name: 'my-package' })
`)
}

export default readWriteJsonDemo
