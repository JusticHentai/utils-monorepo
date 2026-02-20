import { action } from 'storybook/actions'
import stubObject from '../../../packages/js-utils/src/stubObject'

const edgeCaseDemo = () => {
  const r1 = stubObject()
  const r2 = stubObject()
  action('stubObject - 边界情况')({
    '返回值': r1,
    '是空对象': Object.keys(r1).length === 0,
    '两次返回不同引用': r1 !== r2,
  })
}

export default edgeCaseDemo
