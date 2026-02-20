import { useMemo } from 'react'
import cs from '../_util/classNames'
import BaseProps from '../types/BaseProps'

export default function useMergeProps<PropsType extends BaseProps>(
  componentProps: PropsType,
  defaultProps: Partial<PropsType>,
  globalComponentProps: Partial<PropsType>
): Omit<PropsType, 'className'> & { className: string } {
  const { ignoreGlobalComponentProps } = componentProps

  return useMemo(() => {
    const { className: componentClassName, ...componentRest } = componentProps
    const { className: defaultClassName, ...defaultRest } = defaultProps
    const { className: globalClassName, ...globalRest } = globalComponentProps

    const mergeClassName = cs(
      componentClassName,
      defaultClassName,
      ignoreGlobalComponentProps ? null : globalClassName
    )

    return {
      ...defaultRest,
      ...(ignoreGlobalComponentProps ? {} : globalRest),
      ...componentRest,
      className: mergeClassName,
    }
  }, [
    componentProps,
    defaultProps,
    globalComponentProps,
    ignoreGlobalComponentProps,
  ])
}
