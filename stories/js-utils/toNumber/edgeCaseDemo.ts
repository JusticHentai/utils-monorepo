import { action } from 'storybook/actions'
import toNumber from '../../../packages/js-utils/src/toNumber'

const edgeCaseDemo = () => {
  action('toNumber - 边界情况')({
    '3.2': toNumber(3.2), '"3.2"': toNumber('3.2'), '""空': toNumber(''), 'true': toNumber(true), 'null': toNumber(null)
  })
}

export default edgeCaseDemo
