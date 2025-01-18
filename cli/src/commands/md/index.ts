import { OBSIDIAN_PATH } from './constants'
import getObsidianMd from './core/getObsidianMd'
import writeMd from './core/writeMd'

const md = async (inputPath?: string) => {
  const obsidianPath = inputPath || OBSIDIAN_PATH

  const mdMap = await getObsidianMd(obsidianPath)

  await writeMd(mdMap)
}

export default md
