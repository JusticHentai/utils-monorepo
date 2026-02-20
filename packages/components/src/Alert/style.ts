import styled, { css } from 'styled-components'
import { cssVar, rgbVar } from '../_style/mixins'
import {
  fontSize,
  fontWeight as fw,
  spacing,
  transition,
} from '../_style/tokens'
import { AlertType } from './interface'

// ====== Alert 组件 token ======
const alertToken = {
  borderWidth: '1px',
  borderRadius: 'var(--border-radius-small)',
  lineHeight: 1.5715,
  titleLineHeight: 1.5,
  titleMarginBottom: spacing[2],
  paddingH: spacing[7],
  paddingV: '9px',
  paddingH_title: spacing[7],
  paddingV_title: spacing[7],
  fontSizeTitle: fontSize.title1,
  fontSizeContent: fontSize.body3,
  fontSizeIcon: '16px',
  fontSizeIcon_title: '18px',
  fontSizeCloseIcon: '12px',
  iconMarginRight: spacing[4],
  closeIconMarginLeft: spacing[4],
  actionMarginLeft: spacing[4],
  actionMarginRight: spacing[4],
} as const

// ====== 类型色映射 ======
const typeColorMap: Record<
  `${AlertType}`,
  { bg: string; border: string; icon: string; contentWithTitle: string }
> = {
  [AlertType.Info]: {
    bg: cssVar('color-primary-light-1'),
    border: 'transparent',
    icon: rgbVar('arcoblue-6'),
    contentWithTitle: cssVar('color-text-2'),
  },
  [AlertType.Success]: {
    bg: cssVar('color-success-light-1'),
    border: 'transparent',
    icon: rgbVar('green-6'),
    contentWithTitle: cssVar('color-text-2'),
  },
  [AlertType.Warning]: {
    bg: cssVar('color-warning-light-1'),
    border: 'transparent',
    icon: rgbVar('orange-6'),
    contentWithTitle: cssVar('color-text-2'),
  },
  [AlertType.Error]: {
    bg: cssVar('color-danger-light-1'),
    border: 'transparent',
    icon: rgbVar('red-6'),
    contentWithTitle: cssVar('color-text-2'),
  },
}

// ====== Styled Components ======
interface WrapperProps {
  $type: AlertType | `${AlertType}`
  $banner?: boolean
  $hasTitle?: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  text-align: left;
  overflow: hidden;
  font-size: ${alertToken.fontSizeContent};
  line-height: ${alertToken.lineHeight};
  border-radius: ${alertToken.borderRadius};
  align-items: center;

  padding: calc(${alertToken.paddingV} - ${alertToken.borderWidth})
    calc(${alertToken.paddingH} - ${alertToken.borderWidth});

  ${({ $type }) => {
    const c = typeColorMap[$type]
    return css`
      background-color: ${c.bg};
      border: ${alertToken.borderWidth} solid ${c.border};
    `
  }}

  ${({ $hasTitle }) =>
    $hasTitle &&
    css`
      padding: calc(${alertToken.paddingV_title} - ${alertToken.borderWidth})
        calc(${alertToken.paddingH_title} - ${alertToken.borderWidth});
      align-items: flex-start;
    `}

  ${({ $banner }) =>
    $banner &&
    css`
      border: none;
      border-radius: 0;
    `}
`

interface IconWrapperProps {
  $type: AlertType | `${AlertType}`
  $hasTitle?: boolean
}

export const IconWrapper = styled.span<IconWrapperProps>`
  margin-right: ${alertToken.iconMarginRight};
  display: flex;
  align-items: center;
  height: calc(${alertToken.lineHeight} * ${alertToken.fontSizeContent});
  font-size: ${alertToken.fontSizeIcon};
  color: ${({ $type }) => typeColorMap[$type].icon};

  ${({ $hasTitle }) =>
    $hasTitle &&
    css`
      height: calc(${alertToken.titleLineHeight} * ${alertToken.fontSizeTitle});
      font-size: ${alertToken.fontSizeIcon_title};
    `}
`

export const Body = styled.div`
  position: relative;
  flex: 1;
`

interface TitleProps {
  $type: AlertType | `${AlertType}`
}

export const Title = styled.div<TitleProps>`
  font-size: ${alertToken.fontSizeTitle};
  font-weight: ${fw[500]};
  line-height: ${alertToken.titleLineHeight};
  margin-bottom: ${alertToken.titleMarginBottom};
  color: ${cssVar('color-text-1')};
`

interface ContentProps {
  $type: AlertType | `${AlertType}`
  $hasTitle?: boolean
}

export const Content = styled.div<ContentProps>`
  color: ${cssVar('color-text-1')};

  ${({ $hasTitle, $type }) =>
    $hasTitle &&
    css`
      color: ${typeColorMap[$type].contentWithTitle};
    `}
`

export const Action = styled.div`
  margin-left: ${alertToken.actionMarginLeft};
`

export const CloseBtn = styled.span`
  box-sizing: border-box;
  padding: 0;
  border: none;
  outline: none;
  font-size: ${alertToken.fontSizeCloseIcon};
  color: ${cssVar('color-text-2')};
  background-color: transparent;
  cursor: pointer;
  margin-left: ${alertToken.closeIconMarginLeft};
  transition: color ${transition.duration1} ${transition.linear};

  &:hover {
    color: ${cssVar('color-text-1')};
  }
`
