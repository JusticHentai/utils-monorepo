import BaseProps from '@/types/BaseProps'

// 栅格行属性
// gutter - 栅格间隔，支持横向间距或[横向, 纵向]格式，单位px
// align - 垂直对齐方式，默认'start'
// justify - 水平排列方式，默认'start'
export interface RowProps extends BaseProps {
  gutter?: number | [number, number]
  align?: 'start' | 'center' | 'end' | 'stretch'
  justify?: 'start' | 'center' | 'end' | 'space-around' | 'space-between'
}

// 默认属性配置
// 注意：此处默认值会被useMergeProps深层合并
export const rowPropsDefault: RowProps = {
  gutter: 0,
  align: 'start',
  justify: 'start',
}
