import { action } from 'storybook/actions'
import isObjectLike from '../../../packages/js-utils/src/isObjectLike'

const isObjectLikeDemo = () => {
  action('isObjectLike 演示')({
    '{}': isObjectLike({}),
    '[1, 2, 3]': isObjectLike([1, 2, 3]),
    'null': isObjectLike(null),
    '函数': isObjectLike(() => {}),
    '"string"': isObjectLike('string'),
  })
}

export default isObjectLikeDemo
