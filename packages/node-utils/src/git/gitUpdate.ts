import shell from '@/shell'

/**
 * git 更新三连
 */
const gitUpdate = async (message?: string): Promise<boolean[]> => {
  const commands = [
    'git add .',
    `git commit -m "${message || 'fix: 普通更新'}"`,
    `git push`,
  ]

  const res = await shell(commands)

  return res as boolean[]
}

export default gitUpdate
