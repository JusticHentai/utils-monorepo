import shell from '../shell'

/**
 * git 更新三连
 * @param message
 */
export default async function gitUpdate(message: string): Promise<void> {
  const commands = [
    'git add .',
    `git commit -m "${message || 'fix: 普通更新'}"`,
    `git push`,
  ]

  await shell(commands)
}
