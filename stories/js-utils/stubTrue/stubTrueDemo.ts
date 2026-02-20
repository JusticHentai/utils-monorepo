import { action } from 'storybook/actions'
import stubTrue from '../../../packages/js-utils/src/stubTrue'

const stubTrueDemo = () => {
  const result1 = stubTrue()
  const result2 = stubTrue()

  action('stubTrue 演示')({
    '返回值1': result1,
    '返回值2': result2,
    '两次返回是否同一引用': result1 === result2,
  })
}

export default stubTrueDemo
