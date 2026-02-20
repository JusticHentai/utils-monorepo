import { action } from 'storybook/actions'
import stubObject from '../../../packages/js-utils/src/stubObject'

const stubObjectDemo = () => {
  const result1 = stubObject()
  const result2 = stubObject()

  action('stubObject 演示')({
    '返回值1': result1,
    '返回值2': result2,
    '两次返回是否同一引用': result1 === result2,
  })
}

export default stubObjectDemo
