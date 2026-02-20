import parseFileName from '../../../packages/node-utils/src/parse/parseFileName'

const parseFileNameDemo = () => {
  // 解析文件路径
  const result = parseFileName('/path/to/file.txt')
  console.log('解析结果:', result)
  // 输出: { name: 'file', extend: '.txt' }
}

export default parseFileNameDemo
