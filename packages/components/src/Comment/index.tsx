import React, { PropsWithChildren, forwardRef, useContext } from 'react'
import cs from '../_util/classNames'
import { isObject, isString } from '../_util/is'
import { pickDataAttributes } from '../_util/pick'
import { ConfigContext } from '../ConfigProvider/context'
import useMergeProps from '../hooks/useMergeProps'
import { CommentProps } from './interface'

const defaultAlign = {
  datetime: 'left',
  actions: 'left',
}

const defaultProps: Partial<CommentProps> = {
  align: 'left',
}

function Comment(
  baseProps: PropsWithChildren<CommentProps>,
  ref: React.Ref<HTMLDivElement>
) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext)
  const props = useMergeProps<PropsWithChildren<CommentProps>>(
    baseProps,
    defaultProps as PropsWithChildren<CommentProps>,
    (componentConfig?.Comment ?? {}) as PropsWithChildren<CommentProps>
  )

  const prefixCls = getPrefixCls('comment')
  const { actions, author, avatar, content, datetime } = props

  const align = {
    ...defaultAlign,
    ...(isObject(props.align)
      ? props.align
      : {
          datetime: props.align,
          actions: props.align,
        }),
  }

  return (
    <div
      ref={ref}
      className={cs(prefixCls, props.className)}
      style={props.style}
      {...pickDataAttributes(props)}
    >
      {avatar && (
        <div className={`${prefixCls}-avatar`}>
          {isString(avatar) ? (
            <img src={avatar} alt="comment-avatar" />
          ) : (
            avatar
          )}
        </div>
      )}
      <div className={`${prefixCls}-inner`}>
        <div className={`${prefixCls}-inner-content`}>
          {(author || datetime) && (
            <div
              className={`${prefixCls}-title ${prefixCls}-title-align-${align.datetime}`}
            >
              {author && (
                <span className={`${prefixCls}-author`}>{author}</span>
              )}
              {datetime && (
                <span className={`${prefixCls}-datetime`}>{datetime}</span>
              )}
            </div>
          )}
          {content && <div className={`${prefixCls}-content`}>{content}</div>}
          {actions && (
            <div
              className={`${prefixCls}-actions ${prefixCls}-actions-align-${align.actions}`}
            >
              {actions}
            </div>
          )}
        </div>
        {props.children && (
          <div className={`${prefixCls}-inner-comment`}>{props.children}</div>
        )}
      </div>
    </div>
  )
}

const CommentRef = forwardRef<HTMLDivElement, PropsWithChildren<CommentProps>>(Comment)

CommentRef.displayName = 'Comment'

export default CommentRef
export type { CommentProps }
