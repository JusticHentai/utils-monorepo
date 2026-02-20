import { action } from 'storybook/actions'
import mergeClass from '../../../packages/element-utils/src/mergeClass'

const basicDemo = () => {
  const result = mergeClass('class1', ['class2', 'class3'], {
    class4: true,
    class5: false,
  })

  action('合并多种类型 class')({ className: result })
}

export default basicDemo
