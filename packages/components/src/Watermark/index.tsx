import React, {
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from 'react'
import cs from '../_util/classNames'
import { isArray } from '../_util/is'
import { ConfigContext } from '../ConfigProvider/context'
import useMergeProps from '../hooks/useMergeProps'
import { WatermarkProps } from './interface'

const defaultFontStyle = {
  color: 'rgba(0, 0, 0, 0.12)',
  fontFamily: 'sans-serif',
  fontSize: '14px',
  fontWeight: 'normal',
}

function createWatermarkElement(
  options: Partial<WatermarkProps>
): HTMLDivElement {
  const {
    zIndex = 10,
    width,
    height,
    rotate = -20,
    image,
    content,
    fontStyle: userFontStyle,
    gap = [100, 100],
    offset,
  } = options

  const font = { ...defaultFontStyle, ...userFontStyle }
  const gapX = gap[0]
  const gapY = gap[1]
  const offsetX = offset ? offset[0] : gapX / 2
  const offsetY = offset ? offset[1] : gapY / 2

  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')!
  const ratio = window.devicePixelRatio || 1

  const contentArr = isArray(content) ? content : [content || '']
  const fontSize =
    typeof font.fontSize === 'number' ? `${font.fontSize}px` : font.fontSize
  ctx.font = `${font.fontWeight} ${fontSize} ${font.fontFamily}`

  const textWidths = contentArr.map((t) => ctx.measureText(t).width)
  const maxTextWidth = Math.max(...textWidths)
  const lineHeight =
    (typeof font.fontSize === 'number'
      ? font.fontSize
      : parseInt(fontSize, 10)) * 1.5

  const canvasWidth = image ? Number(width || 100) + gapX : maxTextWidth + gapX
  const canvasHeight = image
    ? Number(height || 100) + gapY
    : lineHeight * contentArr.length + gapY

  canvas.width = canvasWidth * ratio
  canvas.height = canvasHeight * ratio
  canvas.style.width = `${canvasWidth}px`
  canvas.style.height = `${canvasHeight}px`
  ctx.scale(ratio, ratio)

  ctx.translate(canvasWidth / 2, canvasHeight / 2)
  ctx.rotate((rotate * Math.PI) / 180)
  ctx.translate(-canvasWidth / 2, -canvasHeight / 2)

  if (image) {
    // For image watermark, draw after loading
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = image
    img.onload = () => {
      const w = Number(width || 100)
      const h = Number(height || (w / img.width) * img.height)
      ctx.drawImage(img, (canvasWidth - w) / 2, (canvasHeight - h) / 2, w, h)
      el.style.backgroundImage = `url(${canvas.toDataURL()})`
    }
  } else {
    ctx.fillStyle = font.color!
    ctx.font = `${font.fontWeight} ${fontSize} ${font.fontFamily}`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    const startY =
      (canvasHeight - lineHeight * contentArr.length) / 2 + lineHeight / 2
    contentArr.forEach((text, i) => {
      ctx.fillText(text, canvasWidth / 2, startY + i * lineHeight)
    })
  }

  const el = document.createElement('div')
  el.style.position = 'absolute'
  el.style.top = '0'
  el.style.left = '0'
  el.style.width = '100%'
  el.style.height = '100%'
  el.style.pointerEvents = 'none'
  el.style.zIndex = String(zIndex)
  el.style.backgroundRepeat = 'repeat'
  el.style.backgroundPosition = `${offsetX}px ${offsetY}px`
  el.style.backgroundSize = `${canvasWidth}px ${canvasHeight}px`

  if (!image) {
    el.style.backgroundImage = `url(${canvas.toDataURL()})`
  }

  return el
}

function Watermark(baseProps: WatermarkProps, _ref: React.Ref<HTMLDivElement>) {
  const ctx = useContext(ConfigContext)
  const props = useMergeProps<WatermarkProps>(
    baseProps,
    {} as WatermarkProps,
    (ctx.componentConfig?.Watermark ?? {}) as WatermarkProps
  )

  const containerRef = useRef<HTMLDivElement>(null)
  const watermarkRef = useRef<HTMLDivElement | null>(null)

  // eslint-disable-next-line react-hooks/preserve-manual-memoization
  const updateWatermark = useCallback(() => {
    const container = containerRef.current || props.getContainer?.()
    if (!container) return

    if (watermarkRef.current && watermarkRef.current.parentNode) {
      watermarkRef.current.parentNode.removeChild(watermarkRef.current)
    }

    const el = createWatermarkElement(props)
    watermarkRef.current = el
    container.style.position = container.style.position || 'relative'
    container.insertBefore(el, container.firstChild)
  }, [
    props.zIndex,
    props.width,
    props.height,
    props.rotate,
    props.image,
    props.content,
    props.fontStyle,
    props.gap,
    props.offset,
    props.getContainer,
  ])

  useEffect(() => {
    updateWatermark()
    return () => {
      if (watermarkRef.current && watermarkRef.current.parentNode) {
        watermarkRef.current.parentNode.removeChild(watermarkRef.current)
      }
    }
  }, [updateWatermark])

  // MutationObserver to prevent watermark removal
  useEffect(() => {
    const container = containerRef.current || props.getContainer?.()
    if (!container) return

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'childList') {
          const removed = Array.from(mutation.removedNodes)
          if (watermarkRef.current && removed.includes(watermarkRef.current)) {
            updateWatermark()
          }
        }
      }
    })
    observer.observe(container, { childList: true })
    return () => observer.disconnect()
  }, [updateWatermark])

  const prefix = ctx.getPrefixCls('watermark')

  return props.children ? (
    <div
      className={cs(prefix, props.className)}
      style={{ ...props.style, position: 'relative' }}
      ref={containerRef}
    >
      {props.children}
    </div>
  ) : null
}

const WatermarkComponent = forwardRef(Watermark)
WatermarkComponent.displayName = 'Watermark'

export default WatermarkComponent
export type { WatermarkProps }
