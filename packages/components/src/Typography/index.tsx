import { createElement, forwardRef, useContext } from 'react'
import { ConfigContext } from '../ConfigProvider/context'
import { cs } from '../_util'
import {
  TypographyParagraphProps,
  TypographyProps,
  TypographyTextProps,
  TypographyTitleProps,
} from './interface'

const Typography = forwardRef<HTMLElement, TypographyProps>((props, ref) => {
  const { style, className, children, ...rest } = props
  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('typography')

  return (
    <article
      ref={ref as React.Ref<HTMLElement>}
      className={cs(prefixCls, className)}
      style={style}
      {...rest}
    >
      {children}
    </article>
  )
})
Typography.displayName = 'Typography'

const Title = forwardRef<HTMLHeadingElement, TypographyTitleProps>(
  (props, ref) => {
    const { heading = 1, bold, style, className, children, ...rest } = props
    const { getPrefixCls } = useContext(ConfigContext)
    const prefixCls = getPrefixCls('typography')

    const classString = cs(
      prefixCls,
      `${prefixCls}-title`,
      `${prefixCls}-title-h${heading}`,
      { [`${prefixCls}-title-bold`]: bold },
      className
    )

    return createElement(
      `h${heading}`,
      { ref, className: classString, style, ...rest }, // eslint-disable-line react-hooks/refs
      children
    )
  }
)
Title.displayName = 'Title'

const Text = forwardRef<HTMLSpanElement, TypographyTextProps>((props, ref) => {
  const {
    type,
    bold,
    disabled,
    mark,
    underline,
    delete: del,
    code,
    style,
    className,
    children,
    ...rest
  } = props
  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('typography')

  const classString = cs(
    prefixCls,
    `${prefixCls}-text`,
    {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-text-bold`]: bold,
      [`${prefixCls}-text-disabled`]: disabled,
      [`${prefixCls}-text-underline`]: underline,
      [`${prefixCls}-text-delete`]: del,
    },
    className
  )

  let content: React.ReactNode = children
  if (code) content = <code>{content}</code>
  if (del) content = <del>{content}</del>
  if (underline) content = <u>{content}</u>
  if (mark) {
    const markStyle =
      typeof mark === 'object' ? { backgroundColor: mark.color } : undefined
    content = <mark style={markStyle}>{content}</mark>
  }

  return (
    <span ref={ref} className={classString} style={style} {...rest}>
      {content}
    </span>
  )
})
Text.displayName = 'Text'

const Paragraph = forwardRef<HTMLDivElement, TypographyParagraphProps>(
  (props, ref) => {
    const {
      type,
      bold,
      spacing = 'default',
      style,
      className,
      children,
      ...rest
    } = props
    const { getPrefixCls } = useContext(ConfigContext)
    const prefixCls = getPrefixCls('typography')

    const classString = cs(
      prefixCls,
      `${prefixCls}-paragraph`,
      {
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-paragraph-bold`]: bold,
        [`${prefixCls}-spacing-${spacing}`]: spacing,
      },
      className
    )

    return (
      <div ref={ref} className={classString} style={style} {...rest}>
        {children}
      </div>
    )
  }
)
Paragraph.displayName = 'Paragraph'

type TypographyComponentType = typeof Typography & {
  Title: typeof Title
  Text: typeof Text
  Paragraph: typeof Paragraph
}

const TypographyComponent = Typography as TypographyComponentType
TypographyComponent.Title = Title
TypographyComponent.Text = Text
TypographyComponent.Paragraph = Paragraph

export default TypographyComponent
export { Paragraph, Text, Title }
export type {
  TypographyParagraphProps,
  TypographyProps,
  TypographyTextProps,
  TypographyTitleProps,
}
