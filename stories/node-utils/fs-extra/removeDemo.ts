import { action } from 'storybook/actions'

/**
 * remove 示例
 * 删除文件或目录
 */
const removeDemo = async () => {
  action('remove 示例')(`
import { remove, removeSync } from '@justichentai/node-utils/fs-remove'

// 删除文件
await remove('/tmp/myfile')

// 删除目录（包括所有内容）
await remove('/tmp/mydir')

// 同步删除
removeSync('/tmp/myfile')

// 注意：
// - 可以删除文件或目录
// - 如果路径不存在，静默忽略（不会抛出错误）
// - 会递归删除目录中的所有内容
`)
}

export default removeDemo
