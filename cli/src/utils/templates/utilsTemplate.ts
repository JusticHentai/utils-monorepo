import cd from '../cd'
import jsonRead from '../file/jsonRead'
import jsonWrite from '../file/jsonWrite'
import md from '../file/md'
import rm from '../file/rm'
import gitSubmoduleAdd from '../git/gitSubmoduleAdd'
import gitUpdate from '../git/gitUpdate'
import shell from '../shell'
import getCodeTemplate, {
  Options as GetCodeTemplateOptions,
} from './getCodeTemplate'

export interface UtilsTemplateOptions {
  name: string
  dirname: string
}

/**
 * 工具包模板 初始化
 * @param options
 */
export default async function utilsTemplate(options: UtilsTemplateOptions) {
  const { name } = options

  // 新建缓存文件夹
  await createCache()

  // 进入缓存文件夹
  cd('../utils-template-cache')

  // 将模板拉到缓存文件夹中
  await getTemplate(name)

  // 进入工具包里
  cd(name)

  // 修改包内基础命名
  await setPackageInfo(name)

  // 初始化远程仓库
  await createRepo(name)

  // 初次提交项目
  await pushRepo(name)

  // 回到一开始位置
  cd('-')

  // 删除缓存
  await deleteCache()

  // 仓库加到指定位置
  await addRepo(options)
}

async function createCache() {
  await md('../utils-template-cache')
}

async function getTemplate(name: string) {
  const options: GetCodeTemplateOptions = {
    template: 'utils-template',
    origin: 'github:JusticHentai',
    branch: 'main',
    name,
    link: 'https://github.com/JusticHentai/utils-template',
  }

  await getCodeTemplate(options)
}

async function setPackageInfo(name: string) {
  const oldInfo = await jsonRead('./package.json')

  const setInfo = {
    name: `@justichentai/${name}`,
    repository: {
      type: 'git',
      url: `https://github.com/JusticHentai/${name}`,
    },
  }

  const newInfo = { ...oldInfo, ...setInfo }

  await jsonWrite('./package.json', newInfo)
}

async function createRepo(name: string) {
  const commands = [
    `gh repo create ${name} --public`,
    'git init',
    `git remote add origin git@github.com:JusticHentai/${name}.git`,
    'git branch -M main',
  ]

  await shell(commands)
}

async function pushRepo(name: string) {
  await gitUpdate(`feat: 初始化仓库：${name}`)
}

async function deleteCache() {
  await rm('../utils-template-cache')
}

async function addRepo(options: { name: string; dirname: string }) {
  const { name } = options

  await gitSubmoduleAdd({
    ...options,
    ssh: `git@github.com:JusticHentai/${name}.git`,
  })
}
