import { CSSProperties, ReactElement, ReactNode } from 'react'
import { TriggerPosition } from '../Trigger'

export interface TooltipProps {
  style?: CSSProperties
  className?: string
  children?: ReactElement
  /** 弹出内容 */
  content?: ReactNode
  /** 弹出位置 */
  position?: TriggerPosition
  /** 触发方式 */
  trigger?: 'hover' | 'click' | 'focus'
  /** 是否禁用 */
  disabled?: boolean
  /** 是否显示(受控) */
  popupVisible?: boolean
  /** 默认是否显示 */
  defaultPopupVisible?: boolean
  /** 显隐回调 */
  onVisibleChange?: (visible: boolean) => void
  /** 颜色 */
  color?: string
  /** 是否是 mini 尺寸 */
  mini?: boolean
  /** 弹出层挂载节点 */
  getPopupContainer?: () => HTMLElement
  /** 关闭后是否卸载弹出层 */
  unmountOnExit?: boolean
}
