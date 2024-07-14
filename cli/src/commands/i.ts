import CommandOptions from '../types/CommandOptions'
import utilsTemplate from '../utils/templates/utilsTemplate'

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

    await utilsTemplate({
      name,
      dirname: 'packages',
    })
  },
}

export default i
