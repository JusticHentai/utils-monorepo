import React, {
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import cs from '../_util/classNames'
import { ConfigContext } from '../ConfigProvider/context'
import useMergeProps from '../hooks/useMergeProps'
import { ImageProps } from './interface'

type ImageStatus = 'loading' | 'loaded' | 'error'

const defaultProps: Partial<ImageProps> = {
  footerPosition: 'inner',
  preview: true,
}

function Image(baseProps: ImageProps, ref: React.Ref<HTMLDivElement>) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext)
  const props = useMergeProps<ImageProps>(
    baseProps,
    defaultProps as ImageProps,
    (componentConfig?.Image ?? {}) as ImageProps
  )
  const {
    className,
    style,
    src,
    width,
    height,
    title,
    description,
    actions,
    footerPosition,
    simple,
    loader,
    loaderClassName,
    error,
    preview,
    previewProps: _previewProps,
    lazyload: _lazyload,
    onLoad,
    onError,
    ...rest
  } = props

  const prefixCls = getPrefixCls('image')
  const [status, setStatus] = useState<ImageStatus>('loading')
  const [previewVisible, setPreviewVisible] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  /* eslint-disable react-hooks/set-state-in-effect */

  useEffect(() => {
    if (src) {
      setStatus('loading')
    }
  }, [src])
  /* eslint-enable react-hooks/set-state-in-effect */

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setStatus('loaded')
    onLoad?.(e)
  }

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setStatus('error')
    onError?.(e)
  }

  const showFooter = title || description || (actions && actions.length)

  return (
    <div
      ref={ref}
      className={cs(
        prefixCls,
        {
          [`${prefixCls}-simple`]: simple,
          [`${prefixCls}-loading`]: status === 'loading',
          [`${prefixCls}-loading-error`]: status === 'error',
          [`${prefixCls}-with-footer-inner`]:
            showFooter && footerPosition === 'inner',
          [`${prefixCls}-with-footer-outer`]:
            showFooter && footerPosition === 'outer',
        },
        className
      )}
      style={{ width, height, ...style }}
    >
      <img
        ref={imgRef}
        {...rest}
        src={src}
        className={`${prefixCls}-img`}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        onLoad={handleLoad}
        onError={handleError}
        onClick={() => {
          if (preview) setPreviewVisible(true)
        }}
      />

      {status === 'loading' && loader && (
        <div className={cs(`${prefixCls}-loader`, loaderClassName)}>
          {loader === true ? (
            <div className={`${prefixCls}-loader-spin`} />
          ) : (
            loader
          )}
        </div>
      )}

      {status === 'error' && (
        <div className={`${prefixCls}-error`}>
          {error || (
            <div className={`${prefixCls}-error-icon`}>
              <svg
                viewBox="0 0 48 48"
                width="48"
                height="48"
                fill="currentColor"
              >
                <path d="M24 4C12.96 4 4 12.96 4 24s8.96 20 20 20 20-8.96 20-20S35.04 4 24 4zm2 30h-4v-4h4v4zm0-8h-4V14h4v12z" />
              </svg>
            </div>
          )}
        </div>
      )}

      {showFooter && (
        <div
          className={cs(
            `${prefixCls}-footer`,
            `${prefixCls}-footer-${footerPosition}`
          )}
        >
          <div className={`${prefixCls}-footer-caption`}>
            {title && (
              <div className={`${prefixCls}-footer-caption-title`}>{title}</div>
            )}
            {description && (
              <div className={`${prefixCls}-footer-caption-description`}>
                {description}
              </div>
            )}
          </div>
          {actions && actions.length > 0 && (
            <div className={`${prefixCls}-footer-extra`}>
              {actions.map((action, i) => (
                <span key={i} className={`${prefixCls}-footer-extra-item`}>
                  {action}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Preview modal - simplified version */}
      {previewVisible && preview && (
        <div
          className={`${prefixCls}-preview-wrapper`}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            className={`${prefixCls}-preview-mask`}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.5)',
            }}
            onClick={() => setPreviewVisible(false)}
          />
          <img
            src={src}
            style={{
              position: 'relative',
              zIndex: 1,
              maxWidth: '90vw',
              maxHeight: '90vh',
            }}
            alt=""
          />
        </div>
      )}
    </div>
  )
}

const ImageComponent = forwardRef(Image)
ImageComponent.displayName = 'Image'

export default ImageComponent
export type {
  ImagePreviewActionProps,
  ImagePreviewGroupProps,
  ImagePreviewProps,
  ImageProps,
} from './interface'
