import { createContext } from 'react'

type RowContextType = {
  gutterHorizontal: number
  gutterVertical: number
}

export const RowContext = createContext<RowContextType>({
  gutterHorizontal: 0,
  gutterVertical: 0,
})
