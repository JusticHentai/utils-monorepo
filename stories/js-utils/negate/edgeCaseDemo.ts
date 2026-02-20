import { action } from 'storybook/actions'
import negate from '../../../packages/js-utils/src/negate'

const edgeCaseDemo = () => {
  const isEven = n => n % 2 === 0
  const isOdd = negate(isEven)
  action('negate - 边界情况')({
    'isOdd(1)': isOdd(1),
    'isOdd(2)': isOdd(2),
    'isOdd(0)': isOdd(0),
  })
}

export default edgeCaseDemo
