import { action } from 'storybook/actions'

/**
 * move 示例
 * 移动文件或目录，即使跨设备也可以
 */
const moveDemo = async () => {
  action('move 示例')(`
import { move, moveSync } from '@justichentai/node-utils/fs-move'

// 异步移动文件
await move('/tmp/file.txt', '/tmp/this/path/does/not/exist/file.txt')

// 同步移动
moveSync('/tmp/file.txt', '/tmp/newdir/file.txt')

// 使用 overwrite 选项（覆盖已存在的目标）
await move('/tmp/somedir', '/tmp/may/already/exist/somedir', { overwrite: true })

// 注意：
// - 当 src 是文件时，dest 必须是文件
// - 当 src 是目录时，dest 必须是目录
// - 即使跨设备也可以移动（内部使用 copy + remove）
`)
}

export default moveDemo
