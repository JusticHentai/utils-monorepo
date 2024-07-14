import shell from '../shell'

export interface Options {
  name: string
  dirname: string
  ssh: string
  branch?: string
}

/**
 * git submodule 添加
 * @param options
 */
export default async function gitSubmoduleAdd(options: Options) {
  const { name, dirname, ssh, branch = 'main' } = options

  const commands = [`git submodule add -b ${branch} ${ssh} ${dirname}/${name}`]

  await shell(commands)
}
