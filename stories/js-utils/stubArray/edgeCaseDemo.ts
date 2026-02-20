import { action } from 'storybook/actions'
import stubArray from '../../../packages/js-utils/src/stubArray'

const edgeCaseDemo = () => {
  const r1 = stubArray()
  const r2 = stubArray()
  action('stubArray - 边界情况')({
    '返回值': r1,
    '是数组': Array.isArray(r1),
    '长度为0': r1.length === 0,
    '两次返回不同引用': r1 !== r2,
  })
}

export default edgeCaseDemo
