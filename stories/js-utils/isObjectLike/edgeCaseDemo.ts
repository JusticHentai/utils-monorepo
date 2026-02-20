import { action } from 'storybook/actions'
import isObjectLike from '../../../packages/js-utils/src/isObjectLike'

const edgeCaseDemo = () => {
  const results = {
    '{}': isObjectLike({}),
    '[]': isObjectLike([]),
    '函数': isObjectLike(() => {}),
    'null': isObjectLike(null),
    '1': isObjectLike(1),
  }

  action('isObjectLike - 边界情况')(results)
}

export default edgeCaseDemo
