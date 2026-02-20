/**
 * Arco Design 全局设计 token
 * 来源: default.less + global.less
 */

// ====== Font ======
export const fontFamily =
  "Inter, -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Hiragino Sans GB', 'noto sans', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif"
export const codeFamily = 'Consolas, Menlo'
export const fontSizeBody = '14px'
export const lineHeightBase = 1.5715

export const fontSize = {
  display3: '56px',
  display2: '48px',
  display1: '36px',
  title3: '24px',
  title2: '20px',
  title1: '16px',
  body3: '14px',
  body2: '13px',
  body1: '12px',
  caption: '12px',
} as const

export const fontWeight = {
  100: 100,
  200: 200,
  300: 300,
  400: 400,
  500: 500,
  600: 600,
  700: 700,
  800: 800,
  900: 900,
} as const

// ====== Border ======
export const border = {
  none: '0',
  1: '1px',
  2: '2px',
  3: '3px',
  4: '4px',
  5: '5px',
} as const

export const borderStyle = {
  solid: 'solid',
  dashed: 'dashed',
  dotted: 'dotted',
} as const

export const borderRadius = {
  none: '0',
  small: '2px',
  medium: '4px',
  large: '8px',
  circle: '50%',
} as const

// ====== Size ======
export const size = {
  none: '0',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  7: '28px',
  8: '32px',
  9: '36px',
  10: '40px',
  mini: '24px',
  small: '28px',
  default: '32px',
  large: '36px',
} as const

// ====== Spacing ======
export const spacing = {
  none: '0',
  1: '2px',
  2: '4px',
  3: '6px',
  4: '8px',
  5: '10px',
  6: '12px',
  7: '16px',
  8: '20px',
  9: '24px',
  10: '32px',
  11: '36px',
  12: '40px',
  13: '48px',
  14: '56px',
  15: '60px',
  16: '64px',
  17: '72px',
  18: '80px',
  19: '84px',
  20: '96px',
  21: '100px',
  22: '120px',
} as const

// ====== Shadow ======
export const shadow = {
  none: 'none',
  special: '0 0 1px rgba(0, 0, 0, 0.3)',
  '1-center': '0 0 5px rgba(0, 0, 0, 0.1)',
  '1-up': '0 -2px 5px rgba(0, 0, 0, 0.1)',
  '1-down': '0 2px 5px rgba(0, 0, 0, 0.1)',
  '1-left': '-2px 0 5px rgba(0, 0, 0, 0.1)',
  '1-right': '2px 0 5px rgba(0, 0, 0, 0.1)',
  '2-center': '0 0 10px rgba(0, 0, 0, 0.1)',
  '2-up': '0 -4px 10px rgba(0, 0, 0, 0.1)',
  '2-down': '0 4px 10px rgba(0, 0, 0, 0.1)',
  '2-left': '-4px 0 10px rgba(0, 0, 0, 0.1)',
  '2-right': '4px 0 10px rgba(0, 0, 0, 0.1)',
  '3-center': '0 0 20px rgba(0, 0, 0, 0.1)',
  '3-up': '0 -8px 20px rgba(0, 0, 0, 0.1)',
  '3-down': '0 8px 20px rgba(0, 0, 0, 0.1)',
  '3-left': '-8px 0 20px rgba(0, 0, 0, 0.1)',
  '3-right': '8px 0 20px rgba(0, 0, 0, 0.1)',
} as const

// ====== Transition ======
export const transition = {
  duration1: '0.1s',
  duration2: '0.2s',
  duration3: '0.3s',
  duration4: '0.4s',
  duration5: '0.5s',
  durationLoading: '1s',
  linear: 'cubic-bezier(0, 0, 1, 1)',
  standard: 'cubic-bezier(0.34, 0.69, 0.1, 1)',
  overshoot: 'cubic-bezier(0.3, 1.3, 0.3, 1)',
  decelerate: 'cubic-bezier(0.4, 0.8, 0.74, 1)',
  accelerate: 'cubic-bezier(0.26, 0, 0.6, 0.2)',
} as const

// ====== Z-Index ======
export const zIndex = {
  affix: 999,
  popup: 1000,
  drawer: 1001,
  modal: 1001,
  message: 1003,
  notification: 1003,
  imagePreview: 1001,
} as const
