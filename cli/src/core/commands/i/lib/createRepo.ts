import gitUpdate from '@/utils/git/gitUpdate'
import shell from '@/utils/shell'

/**
 * 创建远程仓库 并初始化 需要安装 github cli
 */
const createRepo = async (name: string) => {
  const commands = [
    `gh repo create ${name} --public`,
    'git init',
    `git remote add origin git@github.com:JusticHentai/${name}.git`,
    'git branch -M main',
  ]

  await shell(commands)

  await gitUpdate(`feat: 初始化仓库：${name}`)
}

export default createRepo
