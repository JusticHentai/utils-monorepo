import { action } from 'storybook/actions'
import upperFirst from '../../../packages/js-utils/src/upperFirst'

const upperFirstDemo = () => {
  action('upperFirst 演示')({
    '"fred"': upperFirst('fred'),
    '"FRED"': upperFirst('FRED'),
    '"Fred"': upperFirst('Fred'),
  })
}

export default upperFirstDemo
