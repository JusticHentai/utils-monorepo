import cd from '../../../packages/node-utils/src/fs/cd'

const cdDemo = async () => {
  // 切换到指定目录
  await cd('/path/to/directory')

  // 切换回原始目录
  await cd('-')
}

export default cdDemo
