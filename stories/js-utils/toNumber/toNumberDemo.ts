import { action } from 'storybook/actions'
import toNumber from '../../../packages/js-utils/src/toNumber'

const toNumberDemo = () => {
  action('toNumber 演示')({
    '3.2': toNumber(3.2),
    'Number.MIN_VALUE': toNumber(Number.MIN_VALUE),
    '"3.2"': toNumber('3.2'),
    'true': toNumber(true),
    'null': toNumber(null),
  })
}

export default toNumberDemo
