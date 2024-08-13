import { CommandOptions } from '@/core/types'
import installUtilsTemplate from './lib/installUtilsTemplate'

const i: CommandOptions = {
  name: 'i',
  dec: '添加新工具',
  args: [
    {
      arg: 'name',
      dec: '项目名',
      required: true,
    },
  ],
  action: async (options: { name: string }) => {
    const { name } = options

    await installUtilsTemplate(name)
  },
}

export default i
