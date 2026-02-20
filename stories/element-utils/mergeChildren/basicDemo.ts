import { action } from 'storybook/actions'
import mergeChildren from '../../../packages/element-utils/src/mergeChildren'

const basicDemo = () => {
  const children = ['Hello', ' ', 'World', 123]
  const merged = mergeChildren(children)

  action('原始子元素')(children)
  action('合并后子元素')(merged)
}

export default basicDemo
