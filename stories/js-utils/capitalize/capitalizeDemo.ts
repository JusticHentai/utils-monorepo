import { action } from 'storybook/actions'
import capitalize from '../../../packages/js-utils/src/capitalize'

const capitalizeDemo = () => {
  action('capitalize - 首字母大写其余小写')({
    'fred': capitalize('fred'),
    'Fred': capitalize('Fred'),
    'FRED': capitalize('FRED'),
    ' fred (前导空格)': capitalize(' fred'),
    'hello world': capitalize('hello world'),
    说明: '首字母大写，其余全部转小写。前导空格的字符串不会变化',
  })
}

export default capitalizeDemo
