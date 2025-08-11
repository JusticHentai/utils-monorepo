import { CSSProperties } from 'react'

export type Args =
  | CSSProperties
  | null
  | undefined
  | false
  | (CSSProperties | null | undefined | false)[]
