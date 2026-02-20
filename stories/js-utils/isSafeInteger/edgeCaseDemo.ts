import { action } from 'storybook/actions'
import isSafeInteger from '../../../packages/js-utils/src/isSafeInteger'

const edgeCaseDemo = () => {
  const results = {
    '3': isSafeInteger(3),
    'MAX_SAFE_INTEGER': isSafeInteger(Number.MAX_SAFE_INTEGER),
    'MAX_SAFE_INTEGER+1': isSafeInteger(Number.MAX_SAFE_INTEGER + 1),
    '3.1': isSafeInteger(3.1),
    'Infinity': isSafeInteger(Infinity),
  }

  action('isSafeInteger - 边界情况')(results)
}

export default edgeCaseDemo
