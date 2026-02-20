import { action } from 'storybook/actions'
import isElement from '../../../packages/js-utils/src/isElement'

const edgeCaseDemo = () => {
  const results = {
    'document.body': isElement(document.body),
    'div 元素': isElement(document.createElement('div')),
    '普通对象': isElement({ nodeType: 1 }),
    'null': isElement(null),
  }

  action('isElement - 边界情况')(results)
}

export default edgeCaseDemo
