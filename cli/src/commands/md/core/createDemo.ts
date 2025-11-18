import { read } from '@justichentai/node-utils'
import { DEMO_PATH } from '../constants'

const createDemo = async (dir: string) => {
  const demoContent = await read(`${dir}/${DEMO_PATH}`)

  const res = `## 示例\n\`\`\`ts\n${demoContent.toString()}\n\`\`\``

  return res
}

export default createDemo
