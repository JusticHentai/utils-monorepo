import { action } from 'storybook/actions'
import toArray from '../../../packages/js-utils/src/toArray'

const edgeCaseDemo = () => {
  action('toArray - 边界情况')({
    '字符串': toArray('abc'), '对象': toArray({ a: 1, b: 2 }), 'null': toArray(null), 'Map': toArray(new Map([['a', 1]]))
  })
}

export default edgeCaseDemo
