import { CSSProperties } from 'react'
import mergeStyle from '.'

const style1: CSSProperties = {
  width: '100px',
  height: '100px',
}

const style2: CSSProperties = {
  width: '200px',
  position: 'absolute',
}

const style3 = false

const style4 = null

const style5 = undefined

const style6: (CSSProperties | null)[] = [
  {
    textAlign: 'center',
  },
  null,
]

const mergedStyle = mergeStyle(style1, style2, style3, style4, style5, style6)

console.log(mergedStyle) // { width: '200px', position: 'absolute', textAlign: 'center' }
