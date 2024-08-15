import { CommandOptions } from '@/core/types'
import path from 'path'

const test: CommandOptions = {
  name: 'test',
  dec: '测试',
  action: async (...options) => {
    console.log('路径: ', path.resolve())
    console.log('参数: ', options)
  },
}

export default test
