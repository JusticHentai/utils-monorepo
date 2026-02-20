import { action } from 'storybook/actions'

/**
 * emptyDir 示例
 * 清空目录内容
 */
const emptyDirDemo = async () => {
  action('emptyDir 示例')(`
import { emptyDir, emptyDirSync } from '@justichentai/node-utils/fs-emptyDir'

// 清空目录（删除所有内容，保留目录本身）
await emptyDir('/tmp/some/dir')

// 同步清空
emptyDirSync('/tmp/some/dir')

// 注意：
// - 如果目录不存在，会创建它
// - 目录本身不会被删除，只删除其内容
// - 非常适合清理临时目录或构建输出目录
`)
}

export default emptyDirDemo
