import { action } from 'storybook/actions'

/**
 * copy 示例
 * 复制文件或目录，包括子目录和文件
 */
const copyDemo = async () => {
  // 注意：此示例展示 API 用法，实际执行需要在 Node.js 环境
  action('copy 示例')(`
import { copy, copySync } from '@justichentai/node-utils/fs-copy'

// 异步复制文件
await copy('/tmp/myfile', '/tmp/mynewfile')

// 异步复制目录
await copy('/tmp/mydir', '/tmp/mynewdir')

// 使用过滤函数
await copy('/tmp/mydir', '/tmp/mynewdir', {
  filter: (src, dest) => !src.includes('node_modules')
})

// 同步复制
copySync('/tmp/myfile', '/tmp/mynewfile')

// 带选项的复制
await copy('/tmp/mydir', '/tmp/mynewdir', {
  overwrite: true,       // 覆盖已存在的文件
  errorOnExist: false,   // 当 overwrite 为 false 且目标存在时不抛出错误
  dereference: false,    // 是否解引用符号链接
  preserveTimestamps: true // 保留原始时间戳
})
`)
}

export default copyDemo
