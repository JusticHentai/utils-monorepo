import { ReactNode, useRef } from 'react'
import { createPortal } from 'react-dom'
import { isServerRendering } from '../_util/is'

export interface PortalProps {
  /** 挂载节点，默认 document.body */
  getContainer?: (...args: any[]) => HTMLElement | Element
  children?: ReactNode
}

function Portal(props: PortalProps) {
  const { getContainer, children } = props
  const containerRef = useRef<HTMLElement | null>(null)

  if (isServerRendering()) {
    return null
  }

  // eslint-disable-next-line react-hooks/refs
  if (!containerRef.current) {
    containerRef.current = getContainer ? (getContainer() as HTMLElement) : document.body
  }

  // eslint-disable-next-line react-hooks/refs
  return createPortal(children, containerRef.current)
}

Portal.displayName = 'Portal'

export default Portal
