import { isObject } from '@justichentai/js-utils'
import { CSSProperties } from 'react'
import { MergeStyleArg } from './interface'

const mergeStyles = (...args: MergeStyleArg[]): CSSProperties => {
  const res: CSSProperties = {}

  for (const arg of args) {
    if (!arg) {
      continue
    }

    if (Array.isArray(arg)) {
      for (const props of arg) {
        Object.assign(res, mergeStyles(props))
      }
    }

    if (isObject(arg)) {
      Object.assign(res, arg)
    }
  }

  return res
}

export default mergeStyles
