import { action } from 'storybook/actions'
import toFinite from '../../../packages/js-utils/src/toFinite'

const edgeCaseDemo = () => {
  action('toFinite - 边界情况')({
    'Infinity': toFinite(Infinity), '-Infinity': toFinite(-Infinity), '3.2': toFinite(3.2), '"3.2"': toFinite('3.2'), 'NaN': toFinite(NaN)
  })
}

export default edgeCaseDemo
