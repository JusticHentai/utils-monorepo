import { CSSProperties } from 'react'

export type MergeStyleArg =
  | CSSProperties
  | null
  | undefined
  | false
  | (CSSProperties | null | undefined | false)[]
