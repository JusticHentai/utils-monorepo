import { action } from 'storybook/actions'

/**
 * ensureFile 示例
 * 确保文件存在，如果不存在则创建（包括父目录）
 */
const ensureFileDemo = async () => {
  action('ensureFile 示例')(`
import { ensureFile, ensureFileSync, createFile } from '@justichentai/node-utils/fs-ensureFile'

// 异步确保文件存在
await ensureFile('/tmp/this/path/does/not/exist/file.txt')

// 同步版本
ensureFileSync('/tmp/this/path/does/not/exist/file.txt')

// 别名（功能相同）
await createFile('/tmp/myfile.txt')

// 注意：如果文件已存在，不会修改它
`)
}

export default ensureFileDemo
