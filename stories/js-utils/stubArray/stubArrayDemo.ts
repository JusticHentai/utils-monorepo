import { action } from 'storybook/actions'
import stubArray from '../../../packages/js-utils/src/stubArray'

const stubArrayDemo = () => {
  const result1 = stubArray()
  const result2 = stubArray()

  action('stubArray 演示')({
    '返回值1': result1,
    '返回值2': result2,
    '两次返回是否同一引用': result1 === result2,
  })
}

export default stubArrayDemo
