import { action } from 'storybook/actions'
import mapValues from '../../../packages/js-utils/src/mapValues'

const edgeCaseDemo = () => {
  action('mapValues - 边界情况')({
    '乘2': mapValues({ a: 1, b: 2 }, v => v * 2), '空对象': mapValues({}, v => v)
  })
}

export default edgeCaseDemo
