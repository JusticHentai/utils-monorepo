import { isObject } from '@justichentai/js-utils'
import { CSSProperties } from 'react'
import { Args } from './interface'

const mergeStyles = (...args: Args[]): CSSProperties => {
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
