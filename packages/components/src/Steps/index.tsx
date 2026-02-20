import {
  Children,
  cloneElement,
  forwardRef,
  ReactElement,
  useContext,
} from 'react'
import { ConfigContext } from '../ConfigProvider/context'
import { cs } from '../_util'
import { StepProps, StepsProps } from './interface'

const Step = forwardRef<
  HTMLDivElement,
  StepProps & {
    index?: number
    total?: number
    stepStatus?: string
    onClick?: () => void
  }
>((props, ref) => {
  const {
    style,
    className,
    title,
    description,
    icon,
    status,
    disabled,
    index = 0,
    total: _total,
    stepStatus = 'wait',
    onClick,
    id,
    ...rest
  } = props

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('steps-item')

  const mergedStatus = status || stepStatus

  const classString = cs(
    prefixCls,
    `${prefixCls}-${mergedStatus}`,
    { [`${prefixCls}-disabled`]: disabled },
    className
  )

  return (
    <div
      ref={ref}
      className={classString}
      style={style}
      onClick={disabled ? undefined : onClick}
      id={id != null ? String(id) : undefined}
      {...rest}
    >
      <div className={`${prefixCls}-icon`}>
        {icon || (
          <span className={`${prefixCls}-icon-number`}>{index + 1}</span>
        )}
      </div>
      <div className={`${prefixCls}-content`}>
        {title && <div className={`${prefixCls}-title`}>{title}</div>}
        {description && (
          <div className={`${prefixCls}-description`}>{description}</div>
        )}
      </div>
      <div className={`${prefixCls}-tail`} />
    </div>
  )
})
Step.displayName = 'Step'

const Steps = forwardRef<HTMLDivElement, StepsProps>((props, ref) => {
  const {
    style,
    className,
    children,
    current = 0,
    direction = 'horizontal',
    type = 'default',
    size = 'default',
    status = 'process',
    lineless,
    labelPlacement = 'horizontal',
    onChange,
    ...rest
  } = props

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('steps')

  const classString = cs(
    prefixCls,
    `${prefixCls}-${direction}`,
    `${prefixCls}-${type}`,
    `${prefixCls}-size-${size}`,
    `${prefixCls}-label-${labelPlacement}`,
    { [`${prefixCls}-lineless`]: lineless },
    className
  )

  const childArray = Children.toArray(children) as ReactElement<StepProps>[]

  return (
    <div ref={ref} className={classString} style={style} {...(rest as any)}>
      {childArray.map((child, index) => {
        let stepStatus: string = 'wait'
        if (index < current) stepStatus = 'finish'
        else if (index === current) stepStatus = status
        else stepStatus = 'wait'

        return cloneElement(child, {
          key: index,
          index,
          total: childArray.length,
          stepStatus,
          onClick: onChange ? () => onChange(index, child.props.id) : undefined,
        } as Partial<
          StepProps & {
            index: number
            total: number
            stepStatus: string
            onClick: () => void
          }
        >)
      })}
    </div>
  )
})

Steps.displayName = 'Steps'

type StepsComponentType = typeof Steps & {
  Step: typeof Step
}

const StepsComponent = Steps as StepsComponentType
StepsComponent.Step = Step

export default StepsComponent
export { Step }
export type { StepProps, StepsProps }
