import styled, { css } from 'styled-components'
import { cssVar, rgbVar } from '../_style/mixins'
import {
  borderRadius,
  fontSize,
  lineHeightBase,
  size,
  spacing,
  transition,
} from '../_style/tokens'
import { BtnShape, BtnSize, BtnStatus, BtnType } from './interface'

// ====== Size tokens ======
const sizeTokens: Record<
  BtnSize,
  {
    height: string
    radius: string
    paddingH: string
    fontSize: string
    iconSpacing: string
  }
> = {
  [BtnSize.Mini]: {
    height: size.mini,
    radius: borderRadius.small,
    paddingH: '11px',
    fontSize: fontSize.body1,
    iconSpacing: spacing[2],
  },
  [BtnSize.Small]: {
    height: size.small,
    radius: borderRadius.small,
    paddingH: '15px',
    fontSize: fontSize.body3,
    iconSpacing: spacing[3],
  },
  [BtnSize.Default]: {
    height: size.default,
    radius: borderRadius.small,
    paddingH: '15px',
    fontSize: fontSize.body3,
    iconSpacing: spacing[4],
  },
  [BtnSize.Large]: {
    height: size.large,
    radius: borderRadius.small,
    paddingH: '19px',
    fontSize: fontSize.body3,
    iconSpacing: spacing[4],
  },
}

// ====== Type color tokens ======
interface TypeColors {
  text: string
  textHover: string
  textActive: string
  textDisabled: string
  bg: string
  bgHover: string
  bgActive: string
  bgDisabled: string
  border: string
  borderHover: string
  borderActive: string
  borderDisabled: string
  borderStyle: string
  boxShadow: string
}

interface StatusColors {
  text: string
  textHover: string
  textActive: string
  textDisabled: string
  bg: string
  bgHover: string
  bgActive: string
  bgDisabled: string
  border: string
  borderHover: string
  borderActive: string
  borderDisabled: string
  boxShadow: string
}

const outlineColors: TypeColors = {
  text: rgbVar('arcoblue-6'),
  textHover: rgbVar('arcoblue-5'),
  textActive: rgbVar('arcoblue-7'),
  textDisabled: cssVar('color-primary-light-3'),
  bg: 'transparent',
  bgHover: 'transparent',
  bgActive: 'transparent',
  bgDisabled: 'transparent',
  border: rgbVar('arcoblue-6'),
  borderHover: rgbVar('arcoblue-5'),
  borderActive: rgbVar('arcoblue-7'),
  borderDisabled: cssVar('color-primary-light-3'),
  borderStyle: 'solid',
  boxShadow: rgbVar('arcoblue-3'),
}

const primaryColors: TypeColors = {
  text: '#fff',
  textHover: '#fff',
  textActive: '#fff',
  textDisabled: '#fff',
  bg: rgbVar('arcoblue-6'),
  bgHover: rgbVar('arcoblue-5'),
  bgActive: rgbVar('arcoblue-7'),
  bgDisabled: cssVar('color-primary-light-3'),
  border: 'transparent',
  borderHover: 'transparent',
  borderActive: 'transparent',
  borderDisabled: 'transparent',
  borderStyle: 'solid',
  boxShadow: rgbVar('arcoblue-3'),
}

const secondaryColors: TypeColors = {
  text: cssVar('color-text-2'),
  textHover: cssVar('color-text-2'),
  textActive: cssVar('color-text-2'),
  textDisabled: cssVar('color-text-4'),
  bg: cssVar('color-secondary'),
  bgHover: cssVar('color-secondary-hover'),
  bgActive: cssVar('color-secondary-active'),
  bgDisabled: cssVar('color-secondary-disabled'),
  border: 'transparent',
  borderHover: 'transparent',
  borderActive: 'transparent',
  borderDisabled: 'transparent',
  borderStyle: 'solid',
  boxShadow: cssVar('color-secondary-active'),
}

const dashedColors: TypeColors = {
  text: cssVar('color-text-2'),
  textHover: cssVar('color-text-2'),
  textActive: cssVar('color-text-2'),
  textDisabled: cssVar('color-text-4'),
  bg: cssVar('color-fill-2'),
  bgHover: cssVar('color-fill-3'),
  bgActive: cssVar('color-fill-4'),
  bgDisabled: cssVar('color-fill-2'),
  border: cssVar('color-neutral-3'),
  borderHover: cssVar('color-neutral-4'),
  borderActive: cssVar('color-neutral-5'),
  borderDisabled: cssVar('color-neutral-3'),
  borderStyle: 'dashed',
  boxShadow: cssVar('color-secondary-active'),
}

const textColors: TypeColors = {
  text: rgbVar('arcoblue-6'),
  textHover: rgbVar('arcoblue-6'),
  textActive: rgbVar('arcoblue-6'),
  textDisabled: cssVar('color-primary-light-3'),
  bg: 'transparent',
  bgHover: cssVar('color-fill-2'),
  bgActive: cssVar('color-fill-3'),
  bgDisabled: 'transparent',
  border: 'transparent',
  borderHover: 'transparent',
  borderActive: 'transparent',
  borderDisabled: 'transparent',
  borderStyle: 'solid',
  boxShadow: cssVar('color-secondary-active'),
}

const typeMap: Record<string, TypeColors> = {
  [BtnType.Outline]: outlineColors,
  [BtnType.Primary]: primaryColors,
  [BtnType.Secondary]: secondaryColors,
  [BtnType.Default]: secondaryColors,
  [BtnType.Dashed]: dashedColors,
  [BtnType.Text]: textColors,
}

// ====== Status color factories ======
enum StatusKey {
  Warning = 'warning',
  Error = 'error',
  Success = 'success',
}

const statusColorSuffix: Record<
  StatusKey,
  {
    palette: string
    shade6: string
    shade5: string
    shade7: string
    shade3: string
  }
> = {
  [StatusKey.Warning]: {
    palette: 'orange',
    shade6: 'orange-6',
    shade5: 'orange-5',
    shade7: 'orange-7',
    shade3: 'orange-3',
  },
  [StatusKey.Error]: {
    palette: 'red',
    shade6: 'red-6',
    shade5: 'red-5',
    shade7: 'red-7',
    shade3: 'red-3',
  },
  [StatusKey.Success]: {
    palette: 'green',
    shade6: 'green-6',
    shade5: 'green-5',
    shade7: 'green-7',
    shade3: 'green-3',
  },
}

function getStatusColors(type: string, status: StatusKey): StatusColors {
  const s = statusColorSuffix[status]

  if (type === BtnType.Primary) {
    return {
      text: '#fff',
      textHover: '#fff',
      textActive: '#fff',
      textDisabled: '#fff',
      bg: rgbVar(s.shade6),
      bgHover: rgbVar(s.shade5),
      bgActive: rgbVar(s.shade7),
      bgDisabled: cssVar(
        `color-${status === StatusKey.Error ? 'danger' : status}-light-3`
      ),
      border: 'transparent',
      borderHover: 'transparent',
      borderActive: 'transparent',
      borderDisabled: 'transparent',
      boxShadow: rgbVar(s.shade3),
    }
  }

  if (type === BtnType.Outline) {
    return {
      text: rgbVar(s.shade6),
      textHover: rgbVar(s.shade5),
      textActive: rgbVar(s.shade7),
      textDisabled: cssVar(
        `color-${status === StatusKey.Error ? 'danger' : status}-light-3`
      ),
      bg: 'transparent',
      bgHover: 'transparent',
      bgActive: 'transparent',
      bgDisabled: 'transparent',
      border: rgbVar(s.shade6),
      borderHover: rgbVar(s.shade5),
      borderActive: rgbVar(s.shade7),
      borderDisabled: cssVar(
        `color-${status === StatusKey.Error ? 'danger' : status}-light-3`
      ),
      boxShadow: rgbVar(s.shade3),
    }
  }

  if (type === BtnType.Text) {
    return {
      text: rgbVar(s.shade6),
      textHover: rgbVar(s.shade6),
      textActive: rgbVar(s.shade6),
      textDisabled: cssVar(
        `color-${status === StatusKey.Error ? 'danger' : status}-light-3`
      ),
      bg: 'transparent',
      bgHover: cssVar('color-fill-2'),
      bgActive: cssVar('color-fill-3'),
      bgDisabled: 'transparent',
      border: 'transparent',
      borderHover: 'transparent',
      borderActive: 'transparent',
      borderDisabled: 'transparent',
      boxShadow: cssVar('color-secondary-active'),
    }
  }

  // secondary / dashed / default
  const semName = status === StatusKey.Error ? 'danger' : status
  return {
    text: rgbVar(s.shade6),
    textHover: rgbVar(s.shade6),
    textActive: rgbVar(s.shade6),
    textDisabled: cssVar(`color-${semName}-light-3`),
    bg: cssVar(`color-${semName}-light-1`),
    bgHover: cssVar(`color-${semName}-light-2`),
    bgActive: cssVar(`color-${semName}-light-3`),
    bgDisabled: cssVar(`color-${semName}-light-1`),
    border:
      type === BtnType.Dashed
        ? cssVar(`color-${semName}-light-2`)
        : 'transparent',
    borderHover:
      type === BtnType.Dashed
        ? cssVar(`color-${semName}-light-3`)
        : 'transparent',
    borderActive:
      type === BtnType.Dashed
        ? cssVar(`color-${semName}-light-4`)
        : 'transparent',
    borderDisabled:
      type === BtnType.Dashed
        ? cssVar(`color-${semName}-light-2`)
        : 'transparent',
    boxShadow: rgbVar(s.shade3),
  }
}

// ====== Type style generator ======
function typeStyle(c: TypeColors, disabled: boolean, loading: boolean) {
  if (disabled) {
    return css`
      background-color: ${c.bgDisabled};
      color: ${c.textDisabled};
      border: 1px ${c.borderStyle} ${c.borderDisabled};
      cursor: not-allowed;
    `
  }
  return css`
    background-color: ${c.bg};
    color: ${c.text};
    border: 1px ${c.borderStyle} ${c.border};

    &:not(:active):hover {
      ${!loading &&
      css`
        border-color: ${c.borderHover};
        color: ${c.textHover};
        background-color: ${c.bgHover};
      `}
    }

    &:active {
      ${!loading &&
      css`
        border-color: ${c.borderActive};
        color: ${c.textActive};
        background-color: ${c.bgActive};
      `}
    }

    &:focus-visible {
      box-shadow: 0 0 0 2px ${c.boxShadow};
    }
  `
}

function statusStyle(
  type: string,
  status: `${BtnStatus}`,
  disabled: boolean,
  loading: boolean
) {
  if (status === BtnStatus.Default) return css``
  const c = getStatusColors(type, status as StatusKey)

  if (disabled) {
    return css`
      color: ${c.textDisabled};
      background-color: ${c.bgDisabled};
      border-color: ${c.borderDisabled};
      cursor: not-allowed;
    `
  }

  return css`
    background-color: ${c.bg};
    color: ${c.text};
    border-color: ${c.border};

    &:not(:active):hover {
      ${!loading &&
      css`
        border-color: ${c.borderHover};
        color: ${c.textHover};
        background-color: ${c.bgHover};
      `}
    }

    &:active {
      ${!loading &&
      css`
        border-color: ${c.borderActive};
        color: ${c.textActive};
        background-color: ${c.bgActive};
      `}
    }

    &:focus-visible {
      box-shadow: 0 0 0 2px ${c.boxShadow};
    }
  `
}

// ====== Main Styled Button ======
interface ButtonStyleProps {
  $btnType: BtnType | `${BtnType}`
  $size: BtnSize | `${BtnSize}`
  $status: BtnStatus | `${BtnStatus}`
  $shape: BtnShape | `${BtnShape}`
  $long?: boolean
  $loading?: boolean
  $iconOnly?: boolean
  $disabled?: boolean
}

const Button = styled.button<ButtonStyleProps>`
  display: inline-block;
  position: relative;
  outline: none;
  font-weight: 400;
  appearance: none;
  user-select: none;
  cursor: pointer;
  white-space: nowrap;
  transition: all ${transition.duration1} ${transition.linear};
  box-sizing: border-box;
  line-height: ${lineHeightBase};
  text-decoration: none;

  > a:only-child {
    color: currentColor;
  }

  &:active {
    transition: none;
  }

  /* ====== Size ====== */
  ${({ $size }) => {
    const t = sizeTokens[$size]
    return css`
      height: ${t.height};
      padding: 0 ${t.paddingH};
      font-size: ${t.fontSize};
      border-radius: ${t.radius};

      > svg + span,
      > span + svg {
        margin-left: ${t.iconSpacing};
      }
    `
  }}

  /* ====== Shape ====== */
  ${({ $shape, $size }) => {
    if ($shape === BtnShape.Circle) {
      return css`
        width: ${sizeTokens[$size].height};
        height: ${sizeTokens[$size].height};
        padding: 0;
        text-align: center;
        border-radius: 50%;
      `
    }
    if ($shape === BtnShape.Round) {
      return css`
        border-radius: calc(${sizeTokens[$size].height} * 0.5);
      `
    }
    return css``
  }}

  /* ====== Icon Only ====== */
  ${({ $iconOnly, $size }) =>
    $iconOnly &&
    css`
      width: ${sizeTokens[$size].height};
      height: ${sizeTokens[$size].height};
      padding: 0;
    `}

  /* ====== Long ====== */
  ${({ $long }) =>
    $long &&
    css`
      display: block;
      width: 100%;
    `}

  /* ====== Type ====== */
  ${({ $btnType, $disabled, $loading }) => {
    const key = $btnType === BtnType.Default ? BtnType.Secondary : $btnType
    const colors = typeMap[key] || secondaryColors
    return typeStyle(colors, !!$disabled, !!$loading)
  }}

  /* ====== Status ====== */
  ${({ $btnType, $status, $disabled, $loading }) => {
    const key = $btnType === BtnType.Default ? BtnType.Secondary : $btnType
    return statusStyle(key, $status, !!$disabled, !!$loading)
  }}

  /* ====== Loading ====== */
  ${({ $loading }) =>
    $loading &&
    css`
      cursor: default;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        top: -1px;
        right: -1px;
        bottom: -1px;
        left: -1px;
        z-index: 1;
        display: block;
        background: #fff;
        border-radius: inherit;
        opacity: 0.4;
        transition: opacity ${transition.duration1} ${transition.linear};
        pointer-events: none;
      }
    `}
`

export default Button
