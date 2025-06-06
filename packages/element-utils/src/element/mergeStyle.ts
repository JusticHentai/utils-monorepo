import { CSSProperties } from 'react'
import { deepClone } from '@justichentai/js-utils'

type RawStyle =
  | CSSProperties
  | null
  | undefined
  | false
  | (CSSProperties | null | undefined | false)[]

const mergeStyles = (rawStyles: RawStyle): CSSProperties => {
  if (Array.isArray(rawStyles)) {
    const res: CSSProperties = {}

    for (const rawStyle of rawStyles) {
      Object.assign(res, mergeStyles(rawStyle))
    }

    return res
  }

  return deepClone(rawStyles)
}

export default mergeStyles
