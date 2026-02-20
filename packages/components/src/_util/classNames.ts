type ClassNamesArg =
  | string
  | string[]
  | Record<string, unknown>
  | undefined
  | null
  | false

/**
 * 合并 className，支持 string / string[] / Record<string, boolean>
 */
export default function classNames(...args: ClassNamesArg[]): string {
  const classes: string[] = []

  for (const arg of args) {
    if (!arg) continue

    if (typeof arg === 'string') {
      classes.push(arg)
    } else if (Array.isArray(arg)) {
      classes.push(classNames(...arg))
    } else if (typeof arg === 'object') {
      for (const key in arg) {
        if (Object.prototype.hasOwnProperty.call(arg, key) && arg[key]) {
          classes.push(key)
        }
      }
    }
  }

  return classes.filter(Boolean).join(' ')
}
