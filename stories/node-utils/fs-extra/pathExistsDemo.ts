import { action } from 'storybook/actions'

/**
 * pathExists 示例
 * 检查路径是否存在
 */
const pathExistsDemo = async () => {
  action('pathExists 示例')(`
import { pathExists, pathExistsSync } from '@justichentai/node-utils/fs-pathExists'

// 异步检查路径是否存在
const exists = await pathExists('/tmp/myfile')
console.log(exists) // true 或 false

// 同步版本
const existsSync = pathExistsSync('/tmp/myfile')
console.log(existsSync) // true 或 false

// 使用场景
if (await pathExists('/tmp/config.json')) {
  // 配置文件存在，读取它
  const config = await readJson('/tmp/config.json')
}
`)
}

export default pathExistsDemo
