import chalk from 'chalk'

export enum LOG {
  info = '#7ed6df',
  debug = '#e056fd',
  warn = '#f0932b',
  error = '#eb4d4b',
}

const makeLog = () => {
  const res: Record<string, any> = {}

  for (const key in LOG) {
    const value = LOG[key as keyof typeof LOG]
    res[key] = (...input: any[]) =>
      console.log(chalk.bgHex(value).white(`[${key.toUpperCase()}]`), ...input)
  }

  return res as Record<keyof typeof LOG, (...input: any[]) => void>
}

export default makeLog()
