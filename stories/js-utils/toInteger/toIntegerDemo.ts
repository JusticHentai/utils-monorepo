import { action } from 'storybook/actions'
import toInteger from '../../../packages/js-utils/src/toInteger'

const toIntegerDemo = () => {
  action('toInteger 演示')({
    '3.2': toInteger(3.2),
    'Number.MIN_VALUE': toInteger(Number.MIN_VALUE),
    'Infinity': toInteger(Infinity),
    '"3.2"': toInteger('3.2'),
    'null': toInteger(null),
  })
}

export default toIntegerDemo
