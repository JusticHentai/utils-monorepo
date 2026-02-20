import {
  CSSProperties,
  ImgHTMLAttributes,
  ReactNode,
  SyntheticEvent,
} from 'react'

export interface ImageProps extends Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  'className'
> {
  style?: CSSProperties
  className?: string | string[]
  src?: string
  width?: string | number
  height?: string | number
  title?: string
  description?: string
  actions?: ReactNode[]
  footerPosition?: 'inner' | 'outer'
  simple?: boolean
  loader?: boolean | ReactNode
  loaderClassName?: string | string[]
  error?: ReactNode
  preview?: boolean
  previewProps?: Partial<ImagePreviewProps>
  lazyload?: boolean | IntersectionObserverInit
  onLoad?: (ev: SyntheticEvent<HTMLImageElement>) => void
  onError?: (ev: SyntheticEvent<HTMLImageElement>) => void
}

export interface ImagePreviewProps {
  style?: CSSProperties
  className?: string | string[]
  src: string
  visible?: boolean
  defaultVisible?: boolean
  maskClosable?: boolean
  closable?: boolean
  actions?: ImagePreviewActionProps[]
  actionsLayout?: string[]
  escToExit?: boolean
  onVisibleChange?: (visible: boolean, preVisible: boolean) => void
  getPopupContainer?: () => HTMLElement
}

export interface ImagePreviewGroupProps extends Omit<
  Partial<ImagePreviewProps>,
  'src'
> {
  srcList?: string[]
  current?: number
  defaultCurrent?: number
  infinite?: boolean
  onChange?: (index: number) => void
}

export interface ImagePreviewActionProps {
  key: string
  content: ReactNode
  name?: string
  disabled?: boolean
  getContainer?: (actionElement: ReactNode) => ReactNode
}
