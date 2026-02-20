import { createContext, ReactNode } from 'react'

export interface CollapseContextType {
  activeKeys: string[]
  onToggle: (key: string, e: React.MouseEvent) => void
  expandIcon?: ReactNode
  expandIconPosition?: 'left' | 'right'
  triggerRegion?: 'header' | 'icon'
  lazyload?: boolean
  destroyOnHide?: boolean
}

export const CollapseContext = createContext<CollapseContextType>({
  activeKeys: [],
  onToggle: () => {},
})
