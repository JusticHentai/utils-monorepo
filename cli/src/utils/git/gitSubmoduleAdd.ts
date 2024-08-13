import shell from '@/utils/shell'

/**
 * git submodule add
 */
const gitSubmoduleAdd = async (options: {
  name: string
  dirname: string
  ssh: string
  branch?: string
}) => {
  const { name, dirname, ssh, branch = 'main' } = options

  const commands = [`git submodule add -b ${branch} ${ssh} ${dirname}/${name}`]

  await shell(commands)
}

export default gitSubmoduleAdd
