import { action } from 'storybook/actions'
import size from '../../../packages/js-utils/src/size'

const edgeCaseDemo = () => {
  action('size - 边界情况')({
    '数组': size([1,2,3]), '字符串': size('abc'), '对象': size({ a: 1, b: 2 }), '空值': size(null), 'Map': size(new Map([['a',1]]))
  })
}

export default edgeCaseDemo
