import { CSSProperties, ReactNode } from 'react'

export interface StepsProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
  /** 当前步骤 */
  current?: number
  /** 步骤条方向 */
  direction?: 'vertical' | 'horizontal'
  /** 类型 */
  type?: 'default' | 'arrow' | 'dot' | 'navigation'
  /** 大小 */
  size?: 'default' | 'small'
  /** 步骤条整体状态 */
  status?: 'wait' | 'process' | 'finish' | 'error'
  /** 自定义步骤连线 */
  lineless?: boolean
  /** 标签位置 */
  labelPlacement?: 'horizontal' | 'vertical'
  /** 变化回调 */
  onChange?: (current: number, id?: string | number) => void
}

export interface StepProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
  /** 标题 */
  title?: ReactNode
  /** 描述 */
  description?: ReactNode
  /** 图标 */
  icon?: ReactNode
  /** 状态 */
  status?: 'wait' | 'process' | 'finish' | 'error'
  /** 是否禁用 */
  disabled?: boolean
  /** 自定义 id */
  id?: string | number
}
