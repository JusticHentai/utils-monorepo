import { action } from 'storybook/actions'
import stubFalse from '../../../packages/js-utils/src/stubFalse'

const stubFalseDemo = () => {
  const result1 = stubFalse()
  const result2 = stubFalse()

  action('stubFalse 演示')({
    '返回值1': result1,
    '返回值2': result2,
    '两次返回是否同一引用': result1 === result2,
  })
}

export default stubFalseDemo
