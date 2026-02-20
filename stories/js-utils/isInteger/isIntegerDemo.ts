import { action } from 'storybook/actions'
import isInteger from '../../../packages/js-utils/src/isInteger'

const isIntegerDemo = () => {
  action('isInteger 演示')({
    '3': isInteger(3),
    '3.0': isInteger(3.0),
    '3.1': isInteger(3.1),
    '"3"': isInteger('3'),
    'Infinity': isInteger(Infinity),
  })
}

export default isIntegerDemo
