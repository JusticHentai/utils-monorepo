import { action } from 'storybook/actions'
import getElementInfo from '../../../packages/element-utils/src/getElementInfo'

const basicDemo = () => {
  const target = document.getElementById('target-with-id') as Element

  const info = getElementInfo(target)

  action('元素信息')(info)
}

export default basicDemo
