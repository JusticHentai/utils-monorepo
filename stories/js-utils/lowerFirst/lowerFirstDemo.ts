import { action } from 'storybook/actions'
import lowerFirst from '../../../packages/js-utils/src/lowerFirst'

const lowerFirstDemo = () => {
  action('lowerFirst 演示')({
    '"Fred"': lowerFirst('Fred'),
    '"FRED"': lowerFirst('FRED'),
    '"fred"': lowerFirst('fred'),
  })
}

export default lowerFirstDemo
