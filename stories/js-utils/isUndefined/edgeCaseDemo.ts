import { action } from 'storybook/actions'
import isUndefined from '../../../packages/js-utils/src/isUndefined'

const edgeCaseDemo = () => {
  const results = {
    'undefined': isUndefined(undefined),
    'void 0': isUndefined(void 0),
    'null': isUndefined(null),
    '0': isUndefined(0),
    '""': isUndefined(''),
  }

  action('isUndefined - 边界情况')(results)
}

export default edgeCaseDemo
