import { css } from 'styled-components'

export interface FlexProps {
  type: 'center' | 'centerColumn' | 'column' | 'warp'
}

const flex = (props?: FlexProps) => {
  const map = {
    center: css`
      display: flex;
      align-items: center;
      justify-content: center;
    `,
    centerColumn: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `,
    column: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
    `,
    warp: css`
      display: flex;
      flex-wrap: wrap;
      align-content: start;
      align-items: center;
      justify-content: start;
    `,
  }

  return map[props?.type || 'center']
}

export default flex
