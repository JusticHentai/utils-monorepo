import { action } from 'storybook/actions'
import isUndefined from '../../../packages/js-utils/src/isUndefined'

const isUndefinedDemo = () => {
  action('isUndefined 演示')({
    'undefined': isUndefined(undefined),
    'void 0': isUndefined(void 0),
    'null': isUndefined(null),
    '0': isUndefined(0),
    '""': isUndefined(''),
  })
}

export default isUndefinedDemo
