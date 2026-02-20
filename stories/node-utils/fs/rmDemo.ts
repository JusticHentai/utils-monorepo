import rm from '../../../packages/node-utils/src/fs/rm'

const rmDemo = async () => {
  // 删除目录
  const result = await rm('/path/to/directory')
  console.log('删除目录结果:', result)
}

export default rmDemo
