import gitSubmoduleAdd from '@/utils/git/gitSubmoduleAdd'

/**
 * 将远程 git 仓库通过 submodule 的方式添加到 package 中
 */
const addSubModule = async (name: string) => {
  await gitSubmoduleAdd({
    name,
    dirname: 'packages',
    ssh: `git@github.com:JusticHentai/${name}.git`,
  })
}

export default addSubModule
