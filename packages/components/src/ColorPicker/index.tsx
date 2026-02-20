import React, {
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import cs from '../_util/classNames'
import { useMergeValue } from '../_util/hooks'
import { ConfigContext } from '../ConfigProvider/context'
import useMergeProps from '../hooks/useMergeProps'
import Input from '../Input'
import Trigger from '../Trigger'
import { ColorPickerProps, HSV } from './interface'
import { formatColor, hsv2rgb, parseColor } from './utils'

const defaultProps: Partial<ColorPickerProps> = {
  format: 'hex',
  size: 'default',
  trigger: 'click',
}

const DEFAULT_PRESETS = [
  '#F53F3F',
  '#F77234',
  '#FF7D00',
  '#F7BA1E',
  '#FADC19',
  '#9FDB1D',
  '#00B42A',
  '#3491FA',
  '#165DFF',
  '#722ED1',
  '#D91AD9',
  '#F5319D',
  '#86909C',
  '#000000',
  '#FFFFFF',
]

/** 调色板组件 */
function Palette(props: {
  prefixCls: string
  hsv: HSV
  onChange: (s: number, v: number) => void
}) {
  const { prefixCls, hsv, onChange } = props
  const paletteRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const updateColor = useCallback(
    (e: MouseEvent | React.MouseEvent) => {
      const rect = paletteRef.current?.getBoundingClientRect()
      if (!rect) return
      const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
      const y = Math.max(0, Math.min(e.clientY - rect.top, rect.height))
      const s = x / rect.width
      const v = 1 - y / rect.height
      onChange(s, v)
    },
    [onChange]
  )

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    dragging.current = true
    updateColor(e)
    const onMove = (me: MouseEvent) => dragging.current && updateColor(me)
    const onUp = () => {
      dragging.current = false
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseup', onUp)
    }
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onUp)
  }

  const { r, g, b } = hsv2rgb(hsv.h, 1, 1)

  return (
    <div
      ref={paletteRef}
      className={`${prefixCls}-palette`}
      style={{ backgroundColor: `rgb(${r},${g},${b})` }}
      onMouseDown={handleMouseDown}
    >
      <div className={`${prefixCls}-palette-saturation`} />
      <div className={`${prefixCls}-palette-brightness`} />
      <div
        className={`${prefixCls}-palette-handler`}
        style={{ left: `${hsv.s * 100}%`, top: `${(1 - hsv.v) * 100}%` }}
      />
    </div>
  )
}

/** Hue 滑块 */
function HueSlider(props: {
  prefixCls: string
  hue: number
  onChange: (hue: number) => void
}) {
  const { prefixCls, hue, onChange } = props
  const barRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const updateHue = useCallback(
    (e: MouseEvent | React.MouseEvent) => {
      const rect = barRef.current?.getBoundingClientRect()
      if (!rect) return
      const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
      onChange((x / rect.width) * 360)
    },
    [onChange]
  )

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    dragging.current = true
    updateHue(e)
    const onMove = (me: MouseEvent) => dragging.current && updateHue(me)
    const onUp = () => {
      dragging.current = false
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseup', onUp)
    }
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onUp)
  }

  return (
    <div
      ref={barRef}
      className={`${prefixCls}-hue-bar`}
      onMouseDown={handleMouseDown}
    >
      <div
        className={`${prefixCls}-hue-handler`}
        style={{ left: `${(hue / 360) * 100}%` }}
      />
    </div>
  )
}

/** Alpha 滑块 */
function AlphaSlider(props: {
  prefixCls: string
  hsv: HSV
  alpha: number
  onChange: (alpha: number) => void
}) {
  const { prefixCls, hsv, alpha, onChange } = props
  const barRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)
  const { r, g, b } = hsv2rgb(hsv.h, hsv.s, hsv.v)

  const updateAlpha = useCallback(
    (e: MouseEvent | React.MouseEvent) => {
      const rect = barRef.current?.getBoundingClientRect()
      if (!rect) return
      const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
      onChange(x / rect.width)
    },
    [onChange]
  )

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    dragging.current = true
    updateAlpha(e)
    const onMove = (me: MouseEvent) => dragging.current && updateAlpha(me)
    const onUp = () => {
      dragging.current = false
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseup', onUp)
    }
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onUp)
  }

  return (
    <div
      ref={barRef}
      className={`${prefixCls}-alpha-bar`}
      style={{
        background: `linear-gradient(to right, rgba(${r},${g},${b},0), rgb(${r},${g},${b}))`,
      }}
      onMouseDown={handleMouseDown}
    >
      <div
        className={`${prefixCls}-alpha-handler`}
        style={{ left: `${alpha * 100}%` }}
      />
    </div>
  )
}

function ColorPicker(
  baseProps: ColorPickerProps,
  ref: React.Ref<HTMLDivElement>
) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext)
  const props = useMergeProps<ColorPickerProps>(
    baseProps,
    defaultProps as ColorPickerProps,
    (componentConfig?.ColorPicker ?? {}) as ColorPickerProps
  )

  const {
    className,
    style,
    disabled,
    disabledAlpha,
    format = 'hex',
    size,
    showText,
    showHistory,
    historyColors,
    presetColors = DEFAULT_PRESETS,
    trigger = 'click',
    getPopupContainer,
    children,
    unmountOnExit,
    onVisibleChange,
    value: _value,
    defaultValue: _defaultValue,
    onChange: _onChange,
    ...rest
  } = props

  const prefixCls = getPrefixCls('color-picker')

  const [value, setValue] = useMergeValue('#165DFF', {
    defaultValue: props.defaultValue,
    value: props.value,
  })

  const parsed = parseColor(value)
  const [hsv, setHsv] = useState<HSV>(parsed.hsv)
  const [alpha, setAlpha] = useState(parsed.alpha)
  const [hexInput, setHexInput] = useState(value.replace(/^#/, ''))
  const [popupVisible, setPopupVisible] = useState(false)

  // 当受控 value 改变时同步内部状态
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const p = parseColor(value)
    setHsv(p.hsv)
    setAlpha(p.alpha)
    setHexInput(formatColor(p.hsv, p.alpha, 'hex').replace(/^#/, ''))
  }, [value])
  /* eslint-enable react-hooks/set-state-in-effect */

  /* eslint-disable react-hooks/preserve-manual-memoization */
  const emitChange = useCallback(
    (newHsv: HSV, newAlpha: number) => {
      const colorStr = formatColor(newHsv, newAlpha, format)
      setValue(colorStr)
      props.onChange?.(colorStr)
      setHexInput(formatColor(newHsv, newAlpha, 'hex').replace(/^#/, ''))
    },
    [format, setValue, props.onChange]
  )
  /* eslint-enable react-hooks/preserve-manual-memoization */

  const handlePaletteChange = (s: number, v: number) => {
    const newHsv = { ...hsv, s, v }
    setHsv(newHsv)
    emitChange(newHsv, alpha)
  }

  const handleHueChange = (h: number) => {
    const newHsv = { ...hsv, h }
    setHsv(newHsv)
    emitChange(newHsv, alpha)
  }

  const handleAlphaChange = (a: number) => {
    setAlpha(a)
    emitChange(hsv, a)
  }

  const handleHexInputChange = (val: string) => {
    setHexInput(val)
    if (/^[0-9A-Fa-f]{6}([0-9A-Fa-f]{2})?$/.test(val)) {
      const p = parseColor(`#${val}`)
      setHsv(p.hsv)
      setAlpha(p.alpha)
      emitChange(p.hsv, p.alpha)
    }
  }

  const handlePresetClick = (color: string) => {
    const p = parseColor(color)
    setHsv(p.hsv)
    setAlpha(p.alpha)
    emitChange(p.hsv, p.alpha)
  }

  const handleVisibleChange = (visible: boolean) => {
    setPopupVisible(visible)
    onVisibleChange?.(visible)
  }

  const { r, g, b } = hsv2rgb(hsv.h, hsv.s, hsv.v)
  const currentColor =
    alpha < 1
      ? `rgba(${r},${g},${b},${alpha.toFixed(2)})`
      : `rgb(${r},${g},${b})`

  const panel = (
    <div className={`${prefixCls}-panel`}>
      <Palette prefixCls={prefixCls} hsv={hsv} onChange={handlePaletteChange} />
      <div className={`${prefixCls}-sliders`}>
        <HueSlider
          prefixCls={prefixCls}
          hue={hsv.h}
          onChange={handleHueChange}
        />
        {!disabledAlpha && (
          <AlphaSlider
            prefixCls={prefixCls}
            hsv={hsv}
            alpha={alpha}
            onChange={handleAlphaChange}
          />
        )}
      </div>
      <div className={`${prefixCls}-input-group`}>
        <div className={`${prefixCls}-input-hex`}>
          <span>#</span>
          <Input
            size="mini"
            value={hexInput}
            onChange={(v) => handleHexInputChange(v)}
          />
        </div>
      </div>
      {presetColors && presetColors.length > 0 && (
        <div className={`${prefixCls}-presets`}>
          {presetColors.map((c) => (
            <span
              key={c}
              className={`${prefixCls}-preset-color`}
              style={{ backgroundColor: c }}
              onClick={() => handlePresetClick(c)}
            />
          ))}
        </div>
      )}
      {showHistory && historyColors && historyColors.length > 0 && (
        <div className={`${prefixCls}-history`}>
          {historyColors.map((c, i) => (
            <span
              key={`${c}-${i}`}
              className={`${prefixCls}-history-color`}
              style={{ backgroundColor: c }}
              onClick={() => handlePresetClick(c)}
            />
          ))}
        </div>
      )}
    </div>
  )

  const triggerNode = children || (
    <div
      className={cs(`${prefixCls}-trigger`, `${prefixCls}-trigger-${size}`, {
        [`${prefixCls}-trigger-disabled`]: disabled,
      })}
    >
      <div
        className={`${prefixCls}-trigger-color`}
        style={{ backgroundColor: currentColor }}
      />
      {showText && <span className={`${prefixCls}-trigger-text`}>{value}</span>}
    </div>
  )

  const classString = cs(prefixCls, className)

  return (
    <Trigger
      trigger={trigger}
      position="bottom"
      disabled={disabled}
      popupVisible={popupVisible}
      onVisibleChange={handleVisibleChange}
      getPopupContainer={getPopupContainer}
      unmountOnExit={unmountOnExit}
      popup={() => panel}
    >
      <div ref={ref} className={classString} style={style} {...rest}>
        {triggerNode}
      </div>
    </Trigger>
  )
}

const ColorPickerComponent = forwardRef<HTMLDivElement, ColorPickerProps>(
  ColorPicker
)
ColorPickerComponent.displayName = 'ColorPicker'

export default ColorPickerComponent
export type { ColorPickerProps, HSV, RGB } from './interface'
