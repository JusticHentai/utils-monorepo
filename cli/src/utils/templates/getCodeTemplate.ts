// @ts-ignore download 第三方库 不支持ts
import download from 'download-git-repo'
import { error } from '../style/chalk'
import Loading from '../style/loading'

export interface Options {
  origin: string // 来源 git链接改版 例如 https://github.com/JusticHentai/utils-template 对应 github:JusticHentai/utils-template
  template: string // 模板名
  branch?: string // 分支
  name: string // 你的文件名
  link: string // 完整链接
}

/**
 * 获取代码模板 不含git
 * @param options
 */
export default function getCodeTemplate(options: Options): Promise<void> {
  return new Promise((resolve) => {
    const { origin, template, branch, name, link } = options

    const loading = new Loading()
    loading.start(`正在下载${template}模板`)

    download(
      `${origin}/${template}#${branch}`,
      `${name}`,
      { clone: true },
      (err: any) => {
        if (err) {
          loading.fail(`模板 ${template} 下载失败`)
          error(err)
          process.exit(-1)
          return
        }
        loading.succeed(`模板 ${template} 下载完成`)
        console.log(`来源：${link}`)
        console.log(`分支：${branch}`)
        console.log('')
        resolve()
      }
    )
  })
}
