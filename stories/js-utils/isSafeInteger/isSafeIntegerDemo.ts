import { action } from 'storybook/actions'
import isSafeInteger from '../../../packages/js-utils/src/isSafeInteger'

const isSafeIntegerDemo = () => {
  action('isSafeInteger 演示')({
    '3': isSafeInteger(3),
    'Number.MAX_SAFE_INTEGER': isSafeInteger(Number.MAX_SAFE_INTEGER),
    'Number.MAX_SAFE_INTEGER + 1': isSafeInteger(Number.MAX_SAFE_INTEGER + 1),
    '3.1': isSafeInteger(3.1),
    'Infinity': isSafeInteger(Infinity),
  })
}

export default isSafeIntegerDemo
