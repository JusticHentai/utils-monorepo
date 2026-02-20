import { forwardRef, useContext, useState } from 'react'
import { ConfigContext } from '../ConfigProvider/context'
import Trigger from '../Trigger'
import { cs } from '../_util'
import { useMergeValue } from '../_util/hooks'
import { PopconfirmProps } from './interface'

const Popconfirm = forwardRef<HTMLDivElement, PopconfirmProps>(
  (props, _ref) => {
    const {
      style,
      className,
      children,
      title,
      content,
      okText = '确定',
      cancelText = '取消',
      okType = 'primary',
      icon,
      showIcon = true,
      onOk,
      onCancel,
      okLoading: propOkLoading,
      position = 'top',
      trigger = 'click',
      disabled,
      popupVisible: propVisible,
      defaultPopupVisible,
      onVisibleChange,
      getPopupContainer,
      unmountOnExit = true,
      ...rest
    } = props

    const { getPrefixCls } = useContext(ConfigContext)
    const prefixCls = getPrefixCls('popconfirm')

    const [visible, setVisible] = useMergeValue(false, {
      defaultValue: defaultPopupVisible,
      value: propVisible,
    })
    const [okLoading, setOkLoading] = useState(false)

    const changeVisible = (v: boolean) => {
      setVisible(v)
      onVisibleChange?.(v)
    }

    const handleOk = async () => {
      if (onOk) {
        const result = onOk()
        if (result && (result as Promise<void>).then) {
          setOkLoading(true)
          try {
            await result
            changeVisible(false)
          } finally {
            setOkLoading(false)
          }
          return
        }
      }
      changeVisible(false)
    }

    const handleCancel = () => {
      onCancel?.()
      changeVisible(false)
    }

    if (!children) return null

    return (
      <Trigger
        trigger={trigger}
        position={position}
        disabled={disabled}
        popupVisible={visible}
        onVisibleChange={changeVisible}
        showArrow
        getPopupContainer={getPopupContainer}
        unmountOnExit={unmountOnExit}
        className={cs(prefixCls, className)}
        style={style}
        popup={() => (
          <div className={`${prefixCls}-inner`} {...rest}>
            <div className={`${prefixCls}-body`}>
              {showIcon && (
                <span className={`${prefixCls}-icon`}>
                  {icon || (
                    <span className={`${prefixCls}-icon-warning`}>⚠</span>
                  )}
                </span>
              )}
              <div className={`${prefixCls}-body-content`}>
                {title && <div className={`${prefixCls}-title`}>{title}</div>}
                {content && (
                  <div className={`${prefixCls}-content`}>{content}</div>
                )}
              </div>
            </div>
            <div className={`${prefixCls}-footer`}>
              <button
                className={`${prefixCls}-btn ${prefixCls}-btn-cancel`}
                onClick={handleCancel}
              >
                {cancelText}
              </button>
              <button
                className={cs(
                  `${prefixCls}-btn`,
                  `${prefixCls}-btn-ok`,
                  `${prefixCls}-btn-${okType}`
                )}
                onClick={handleOk}
                disabled={propOkLoading || okLoading}
              >
                {propOkLoading || okLoading ? '...' : okText}
              </button>
            </div>
          </div>
        )}
      >
        {children}
      </Trigger>
    )
  }
)

Popconfirm.displayName = 'Popconfirm'
export default Popconfirm
export type { PopconfirmProps }
