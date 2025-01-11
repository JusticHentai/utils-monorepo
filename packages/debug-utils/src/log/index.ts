import { LOG } from './constant'

const makeLog = () => {
  const res: Record<string, any> = {}

  for (const key in LOG) {
    const value = LOG[key as keyof typeof LOG]
    res[key] = (...input: any[]) =>
      console.log(
        `%c[${key.toUpperCase()}]`,
        `color:#ffffff;background:${value}`,
        ...input
      )
  }

  return res as Record<LOG, (...input: any[]) => void>
}

export default makeLog()
