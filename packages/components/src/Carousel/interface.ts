import { CSSProperties, MutableRefObject, ReactNode } from 'react'

export type CarouselHandle = {
  dom: HTMLElement
  goto: (options: {
    index: number
    isNegative?: boolean
    isManual?: boolean
    resetAutoPlayInterval?: boolean
  }) => void
}

export interface CarouselProps {
  style?: CSSProperties
  className?: string | string[]
  children?: ReactNode
  currentIndex?: number
  autoPlay?: boolean | { interval?: number; hoverToPause?: boolean }
  miniRender?: boolean
  moveSpeed?: number
  animation?: 'slide' | 'card' | 'fade'
  trigger?: 'click' | 'hover'
  direction?: 'horizontal' | 'vertical'
  showArrow?: 'always' | 'hover' | 'never'
  arrowClassName?: string | string[]
  icons?: { prev?: ReactNode; next?: ReactNode }
  indicatorType?: 'line' | 'dot' | 'slider' | 'never'
  indicatorPosition?: 'bottom' | 'top' | 'left' | 'right' | 'outer'
  indicatorClassName?: string | string[]
  timingFunc?: string
  onChange?: (index: number, prevIndex: number, isManual: boolean) => void
  carousel?: MutableRefObject<CarouselHandle>
}
