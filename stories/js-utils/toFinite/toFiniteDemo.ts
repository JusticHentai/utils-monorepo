import { action } from 'storybook/actions'
import toFinite from '../../../packages/js-utils/src/toFinite'

const toFiniteDemo = () => {
  action('toFinite 演示')({
    '3.2': toFinite(3.2),
    'Number.MIN_VALUE': toFinite(Number.MIN_VALUE),
    'Infinity': toFinite(Infinity),
    '"3.2"': toFinite('3.2'),
    'NaN': toFinite(NaN),
  })
}

export default toFiniteDemo
