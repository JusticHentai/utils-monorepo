/**
 * execaCommand 的主要逻辑
 */
export const mapCommandAsync = ({
  file,
  commandArguments,
}: {
  file: string
  commandArguments: string[]
}): {
  file: string
  commandArguments: string[]
} => parseCommand(file, commandArguments)

/**
 * execaCommandSync 的主要逻辑
 */
export const mapCommandSync = ({
  file,
  commandArguments,
}: {
  file: string
  commandArguments: string[]
}): {
  file: string
  commandArguments: string[]
  isSync: boolean
} => ({ ...parseCommand(file, commandArguments), isSync: true })

/**
 * 将 execaCommand(command) 转换为 execa(file, ...commandArguments)
 */
const parseCommand = (
  command: string,
  unusedArguments: string[]
): { file: string; commandArguments: string[] } => {
  if (unusedArguments.length > 0) {
    throw new TypeError(
      `The command and its arguments must be passed as a single string: ${command} ${unusedArguments}.`
    )
  }

  const [file, ...commandArguments] = parseCommandString(command)
  return { file, commandArguments }
}

/**
 * 将命令字符串转换为文件或参数数组，以传递给 $`${...fileOrCommandArguments}`
 * @param command - 命令字符串
 */
export const parseCommandString = (command: string): string[] => {
  if (typeof command !== 'string') {
    throw new TypeError(`The command must be a string: ${String(command)}.`)
  }

  const trimmedCommand = command.trim()

  if (trimmedCommand === '') {
    return []
  }

  const tokens: string[] = []

  for (const token of trimmedCommand.split(SPACES_REGEXP)) {
    // 允许使用反斜杠转义空格（如果不是作为分隔符）
    const previousToken = tokens.at(-1)

    if (previousToken && previousToken.endsWith('\\')) {
      // 将上一个 token 与当前 token 合并
      tokens[tokens.length - 1] = `${previousToken.slice(0, -1)} ${token}`
    } else {
      tokens.push(token)
    }
  }

  return tokens
}

const SPACES_REGEXP = / +/g
