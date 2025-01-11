import { CommandOptions } from '@/core/types'
import path from 'path'

const test: CommandOptions = {
  name: 'test',
  dec: '测试',
  action: async (...options) => {
    console.log('路径: ', path.resolve())
    console.log('参数: ', options)

    enum LOG {
      INFO = 'info',
      DEBUG = 'debug',
      WARN = 'warn',
      ERROR = 'error',
    }

    for (const key in LOG) {
      console.log('key: ', key)
      console.log('value: ', LOG[key as keyof typeof LOG])
    }
  },
}

export default test
