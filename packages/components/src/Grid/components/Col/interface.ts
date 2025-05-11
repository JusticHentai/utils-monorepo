import BaseProps from '@/types/BaseProps'

export interface ColProps extends BaseProps {
  /** 栅格占位格数（共24格体系） */
  span?: number
  /** 栅格左侧的间隔格数 */
  offset?: number
  /** 栅格向右移动格数 */
  push?: number
  /** 栅格向左移动格数 */
  pull?: number
  /** flex布局属性（支持数字/带单位字符串） */
  flex?: number
}

export const MAX = 24
