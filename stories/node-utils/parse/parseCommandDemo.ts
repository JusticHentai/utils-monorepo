import parseCommand from '../../../packages/node-utils/src/parse/parseCommand'

const parseCommandDemo = () => {
  // 解析命令字符串
  const result = parseCommand('create <name> [--force]')
  console.log('解析结果:', result)
  // 输出: { required: ['name'], optional: ['--force'] }
}

export default parseCommandDemo
