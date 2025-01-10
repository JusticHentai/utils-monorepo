import { useMemo } from 'react'
import BaseProps from '../types/BaseProps'

export default function useMergeProps<PropsType extends BaseProps>(
  componentProps: PropsType,
  defaultProps: Partial<PropsType>,
  globalComponentProps: Partial<PropsType>
): PropsType {
  const { ignoreGlobalComponentProps } = componentProps

  return useMemo(() => {
    return {
      ...defaultProps,
      ...(ignoreGlobalComponentProps ? {} : globalComponentProps),
      ...componentProps,
    }
  }, [
    componentProps,
    defaultProps,
    globalComponentProps,
    ignoreGlobalComponentProps,
  ])
}
