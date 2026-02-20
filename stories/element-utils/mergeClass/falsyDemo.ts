import { action } from 'storybook/actions'
import mergeClass from '../../../packages/element-utils/src/mergeClass'

const falsyDemo = () => {
  const result = mergeClass('class1', undefined, null, false, 'class2')

  action('过滤 falsy 值')({ className: result })
}

export default falsyDemo
