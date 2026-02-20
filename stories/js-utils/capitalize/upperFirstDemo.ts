import { action } from 'storybook/actions'
import upperFirst from '../../../packages/js-utils/src/upperFirst'
import lowerFirst from '../../../packages/js-utils/src/lowerFirst'

const upperFirstDemo = () => {
  action('upperFirst - 仅首字母大写，其余不变')({
    'fred': upperFirst('fred'),
    'FRED': upperFirst('FRED'),
    说明: '与 capitalize 不同，upperFirst 不会将其余字母转小写',
  })

  action('lowerFirst - 仅首字母小写，其余不变')({
    'Fred': lowerFirst('Fred'),
    'FRED': lowerFirst('FRED'),
  })
}

export default upperFirstDemo
