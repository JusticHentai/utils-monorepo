import shell from '@/shell'

const gitTag = async (tag: string) => {
  const resList = await shell([`git tag ${tag}`, `git push origin ${tag}`])

  return (resList as boolean[]).includes(false)
}

export default gitTag
