import { css } from 'styled-components'

export interface ContainerProps {
  type?: 'r' | 'a' | 'f'
  size?: 'x' | 'y' | 'xy' | 'none'
}

const container = (props?: ContainerProps) => {
  const { type = 'r', size = 'x' } = props || {}

  const typeMap = {
    r: css`
      position: relative;
    `,
    a: css`
      position: absolute;
    `,
    f: css`
      position: fixed;
    `,
  }

  const sizeMap = {
    x: css`
      width: 100%;
    `,
    y: css`
      height: 100%;
    `,
    xy: css`
      width: 100%;
      height: 100%;
    `,
    none: css``,
  }

  const typeCss = typeMap[type]
  const sizeCss = sizeMap[size]

  return css`
    ${typeCss}
    ${sizeCss}
  `
}

export default container
