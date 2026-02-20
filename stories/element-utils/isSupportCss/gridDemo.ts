import { action } from 'storybook/actions'
import isSupportCss from '../../../packages/element-utils/src/isSupportCss'

const gridDemo = () => {
  const result = isSupportCss({
    display: 'grid',
    'grid-template-columns': '1fr 1fr',
  })

  action('检测 grid 支持')({ isSupport: result, css: 'display: grid' })
}

export default gridDemo
