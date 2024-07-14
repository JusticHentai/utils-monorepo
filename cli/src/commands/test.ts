import path from 'path'
import CommandOptions from '../types/CommandOptions'

const test: CommandOptions = {
  name: 'test',
  dec: 'debug 专用',
  args: [
    {
      arg: 'value',
      dec: '测试用 value',
      required: false,
    },
  ],
  action: async (options: { value: string }) => {
    const { value } = options

    console.log(`当前 debug 目录：${path.resolve()}`)
    console.log(`当前 value：${value}`)
  },
}

export default test
