import { action } from 'storybook/actions'
import toSafeInteger from '../../../packages/js-utils/src/toSafeInteger'

const toSafeIntegerDemo = () => {
  action('toSafeInteger 演示')({
    '3.2': toSafeInteger(3.2),
    'Number.MIN_VALUE': toSafeInteger(Number.MIN_VALUE),
    'Infinity': toSafeInteger(Infinity),
    '-Infinity': toSafeInteger(-Infinity),
    '"3.2"': toSafeInteger('3.2'),
  })
}

export default toSafeIntegerDemo
