import { action } from 'storybook/actions'

/**
 * ensureDir 示例
 * 确保目录存在，如果不存在则创建
 */
const ensureDirDemo = async () => {
  action('ensureDir 示例')(`
import { ensureDir, ensureDirSync, mkdirs, mkdirp } from '@justichentai/node-utils/fs-ensureDir'

// 异步确保目录存在
await ensureDir('/tmp/this/path/does/not/exist')

// 指定权限模式
await ensureDir('/tmp/mydir', 0o2775)

// 使用配置对象
await ensureDir('/tmp/mydir', { mode: 0o2775 })

// 同步版本
ensureDirSync('/tmp/this/path/does/not/exist')

// 别名（功能相同）
await mkdirs('/tmp/mydir')
await mkdirp('/tmp/mydir')
`)
}

export default ensureDirDemo
