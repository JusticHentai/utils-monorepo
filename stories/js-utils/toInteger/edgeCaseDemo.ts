import { action } from 'storybook/actions'
import toInteger from '../../../packages/js-utils/src/toInteger'

const edgeCaseDemo = () => {
  action('toInteger - 边界情况')({
    '3.2': toInteger(3.2), '3.7': toInteger(3.7), 'Infinity': toInteger(Infinity), '"3.2"': toInteger('3.2')
  })
}

export default edgeCaseDemo
