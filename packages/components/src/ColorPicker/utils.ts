import { HSV, RGB } from './interface'

/** HSV → RGB */
export function hsv2rgb(h: number, s: number, v: number): RGB {
  h = ((h % 360) + 360) % 360
  s = Math.max(0, Math.min(1, s))
  v = Math.max(0, Math.min(1, v))

  const c = v * s
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  const m = v - c

  let r = 0,
    g = 0,
    b = 0
  if (h < 60) {
    r = c
    g = x
    b = 0
  } else if (h < 120) {
    r = x
    g = c
    b = 0
  } else if (h < 180) {
    r = 0
    g = c
    b = x
  } else if (h < 240) {
    r = 0
    g = x
    b = c
  } else if (h < 300) {
    r = x
    g = 0
    b = c
  } else {
    r = c
    g = 0
    b = x
  }

  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
  }
}

/** RGB → HSV */
export function rgb2hsv(r: number, g: number, b: number): HSV {
  r /= 255
  g /= 255
  b /= 255
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const d = max - min

  let h = 0
  const s = max === 0 ? 0 : d / max
  const v = max

  if (d !== 0) {
    if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) * 60
    else if (max === g) h = ((b - r) / d + 2) * 60
    else h = ((r - g) / d + 4) * 60
  }

  return { h, s, v }
}

/** Hex → RGB */
export function hex2rgb(hex: string): RGB {
  hex = hex.replace(/^#/, '')
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((c) => c + c)
      .join('')
  }
  const num = parseInt(hex.slice(0, 6), 16)
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  }
}

/** RGB → Hex */
export function rgb2hex(r: number, g: number, b: number): string {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`
}

/** 解析颜色字符串为 HSV + alpha */
export function parseColor(color: string): { hsv: HSV; alpha: number } {
  let alpha = 1

  // rgba
  const rgbaMatch = color.match(
    /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+))?\s*\)/
  )
  if (rgbaMatch) {
    const r = parseInt(rgbaMatch[1])
    const g = parseInt(rgbaMatch[2])
    const b = parseInt(rgbaMatch[3])
    alpha = rgbaMatch[4] !== undefined ? parseFloat(rgbaMatch[4]) : 1
    return { hsv: rgb2hsv(r, g, b), alpha }
  }

  // hex with alpha
  let hex = color.replace(/^#/, '')
  if (hex.length === 8) {
    alpha = parseInt(hex.slice(6, 8), 16) / 255
    hex = hex.slice(0, 6)
  } else if (hex.length === 4) {
    alpha = parseInt(hex[3] + hex[3], 16) / 255
    hex = hex.slice(0, 3)
  }

  const rgb = hex2rgb(hex)
  return { hsv: rgb2hsv(rgb.r, rgb.g, rgb.b), alpha }
}

/** HSV + alpha 转字符串 */
export function formatColor(
  hsv: HSV,
  alpha: number,
  format: 'hex' | 'rgb' = 'hex'
): string {
  const { r, g, b } = hsv2rgb(hsv.h, hsv.s, hsv.v)
  if (format === 'rgb') {
    return alpha < 1
      ? `rgba(${r}, ${g}, ${b}, ${alpha.toFixed(2)})`
      : `rgb(${r}, ${g}, ${b})`
  }
  const hex = rgb2hex(r, g, b)
  if (alpha < 1) {
    const alphaHex = Math.round(alpha * 255)
      .toString(16)
      .padStart(2, '0')
      .toUpperCase()
    return `${hex}${alphaHex}`
  }
  return hex
}
