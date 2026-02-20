import { action } from 'storybook/actions'
import isSupportCss from '../../../packages/element-utils/src/isSupportCss'

const basicDemo = () => {
  const result = isSupportCss({
    display: 'flex',
    width: '100px',
  })

  action('检测 flex 支持')({
    isSupport: result,
    css: 'display: flex; width: 100px',
  })
}

export default basicDemo
