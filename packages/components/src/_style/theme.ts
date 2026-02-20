/**
 * 全局 CSS 变量注入（亮/暗色模式）
 * 来源: css-variables.less + compiled-colors.less
 * 用法: 在应用根部渲染 <ArcoTheme /> 即可注入所有变量
 */
import { createGlobalStyle } from 'styled-components'
import { darkPalette, palette } from './colors'

/** 生成调色板 CSS 变量 */
function paletteVars(p: typeof palette | typeof darkPalette) {
  let css = ''
  for (const [name, shades] of Object.entries(p)) {
    for (const [shade, rgb] of Object.entries(shades)) {
      css += `--${name}-${shade}: ${rgb};\n`
    }
  }
  return css
}

/**
 * 全局主题样式
 * - body 上注入亮色模式颜色 CSS 变量
 * - body[arco-theme='dark'] 注入暗色模式覆盖
 * - 同时注入语义变量（neutral、text、border、fill、primary-light 等）
 */
export const ArcoTheme = createGlobalStyle`
  body {
    ${paletteVars(palette)}

    /* ====== Semantic: neutral (gray aliases) ====== */
    --color-neutral-1: rgb(var(--gray-1));
    --color-neutral-2: rgb(var(--gray-2));
    --color-neutral-3: rgb(var(--gray-3));
    --color-neutral-4: rgb(var(--gray-4));
    --color-neutral-5: rgb(var(--gray-5));
    --color-neutral-6: rgb(var(--gray-6));
    --color-neutral-7: rgb(var(--gray-7));
    --color-neutral-8: rgb(var(--gray-8));
    --color-neutral-9: rgb(var(--gray-9));
    --color-neutral-10: rgb(var(--gray-10));

    /* ====== Semantic: background ====== */
    --color-bg-1: #fff;
    --color-bg-2: #fff;
    --color-bg-3: #fff;
    --color-bg-4: #fff;
    --color-bg-5: #fff;
    --color-bg-white: #fff;
    --color-white: #ffffff;
    --color-black: #000000;

    /* ====== Semantic: text ====== */
    --color-text-1: var(--color-neutral-10);
    --color-text-2: var(--color-neutral-8);
    --color-text-3: var(--color-neutral-6);
    --color-text-4: var(--color-neutral-4);

    /* ====== Semantic: border ====== */
    --color-border: rgb(var(--gray-3));
    --color-border-1: var(--color-neutral-2);
    --color-border-2: var(--color-neutral-3);
    --color-border-3: var(--color-neutral-4);
    --color-border-4: var(--color-neutral-6);

    /* ====== Semantic: fill ====== */
    --color-fill-1: var(--color-neutral-1);
    --color-fill-2: var(--color-neutral-2);
    --color-fill-3: var(--color-neutral-3);
    --color-fill-4: var(--color-neutral-4);

    /* ====== Semantic: primary light ====== */
    --color-primary-light-1: rgb(var(--arcoblue-1));
    --color-primary-light-2: rgb(var(--arcoblue-2));
    --color-primary-light-3: rgb(var(--arcoblue-3));
    --color-primary-light-4: rgb(var(--arcoblue-4));

    /* ====== Semantic: secondary ====== */
    --color-secondary: var(--color-neutral-2);
    --color-secondary-hover: var(--color-neutral-3);
    --color-secondary-active: var(--color-neutral-4);
    --color-secondary-disabled: var(--color-neutral-1);

    /* ====== Semantic: danger light ====== */
    --color-danger-light-1: rgb(var(--red-1));
    --color-danger-light-2: rgb(var(--red-2));
    --color-danger-light-3: rgb(var(--red-3));
    --color-danger-light-4: rgb(var(--red-4));

    /* ====== Semantic: success light ====== */
    --color-success-light-1: rgb(var(--green-1));
    --color-success-light-2: rgb(var(--green-2));
    --color-success-light-3: rgb(var(--green-3));
    --color-success-light-4: rgb(var(--green-4));

    /* ====== Semantic: warning light ====== */
    --color-warning-light-1: rgb(var(--orange-1));
    --color-warning-light-2: rgb(var(--orange-2));
    --color-warning-light-3: rgb(var(--orange-3));
    --color-warning-light-4: rgb(var(--orange-4));

    /* ====== Semantic: link light ====== */
    --color-link-light-1: rgb(var(--arcoblue-1));
    --color-link-light-2: rgb(var(--arcoblue-2));
    --color-link-light-3: rgb(var(--arcoblue-3));
    --color-link-light-4: rgb(var(--arcoblue-4));

    /* ====== Radius ====== */
    --border-radius-none: 0;
    --border-radius-small: 2px;
    --border-radius-medium: 4px;
    --border-radius-large: 8px;
    --border-radius-circle: 50%;

    /* ====== Font Weight ====== */
    --font-weight-400: 400;
    --font-weight-500: 500;
    --font-weight-600: 600;
    --font-weight-700: 700;

    /* ====== Component ====== */
    --color-tooltip-bg: rgb(var(--gray-10));
    --color-spin-layer-bg: rgba(255, 255, 255, 0.6);
    --color-menu-dark-bg: #232324;
    --color-menu-light-bg: #ffffff;
    --color-mask-bg: rgba(29, 33, 41, 0.6);
  }

  body[arco-theme='dark'] {
    ${paletteVars(darkPalette)}

    /* ====== Semantic overrides: dark mode ====== */
    --color-white: rgba(255, 255, 255, 0.9);
    --color-black: #000000;
    --color-border: #333335;
    --color-bg-1: #17171a;
    --color-bg-2: #232324;
    --color-bg-3: #2a2a2b;
    --color-bg-4: #313132;
    --color-bg-5: #373739;
    --color-bg-white: #f6f6f6;

    --color-text-1: rgba(255, 255, 255, 0.9);
    --color-text-2: rgba(255, 255, 255, 0.7);
    --color-text-3: rgba(255, 255, 255, 0.5);
    --color-text-4: rgba(255, 255, 255, 0.3);

    --color-fill-1: rgba(255, 255, 255, 0.04);
    --color-fill-2: rgba(255, 255, 255, 0.08);
    --color-fill-3: rgba(255, 255, 255, 0.12);
    --color-fill-4: rgba(255, 255, 255, 0.16);

    --color-primary-light-1: rgba(var(--arcoblue-6), 0.2);
    --color-primary-light-2: rgba(var(--arcoblue-6), 0.35);
    --color-primary-light-3: rgba(var(--arcoblue-6), 0.5);
    --color-primary-light-4: rgba(var(--arcoblue-6), 0.65);

    --color-secondary: rgba(var(--gray-9), 0.08);
    --color-secondary-hover: rgba(var(--gray-8), 0.16);
    --color-secondary-active: rgba(var(--gray-7), 0.24);
    --color-secondary-disabled: rgba(var(--gray-9), 0.08);

    --color-danger-light-1: rgba(var(--red-6), 0.2);
    --color-danger-light-2: rgba(var(--red-6), 0.35);
    --color-danger-light-3: rgba(var(--red-6), 0.5);
    --color-danger-light-4: rgba(var(--red-6), 0.65);

    --color-success-light-1: rgba(var(--green-6), 0.2);
    --color-success-light-2: rgba(var(--green-6), 0.35);
    --color-success-light-3: rgba(var(--green-6), 0.5);
    --color-success-light-4: rgba(var(--green-6), 0.65);

    --color-warning-light-1: rgba(var(--orange-6), 0.2);
    --color-warning-light-2: rgba(var(--orange-6), 0.35);
    --color-warning-light-3: rgba(var(--orange-6), 0.5);
    --color-warning-light-4: rgba(var(--orange-6), 0.65);

    --color-link-light-1: rgba(var(--arcoblue-6), 0.2);
    --color-link-light-2: rgba(var(--arcoblue-6), 0.35);
    --color-link-light-3: rgba(var(--arcoblue-6), 0.5);
    --color-link-light-4: rgba(var(--arcoblue-6), 0.65);

    --color-tooltip-bg: #373739;
    --color-spin-layer-bg: rgba(51, 51, 51, 0.6);
    --color-menu-light-bg: #232324;
    --color-mask-bg: rgba(23, 23, 26, 0.6);
  }
`
