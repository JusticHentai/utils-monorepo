import { action } from 'storybook/actions'
import stubString from '../../../packages/js-utils/src/stubString'

const stubStringDemo = () => {
  const result1 = stubString()
  const result2 = stubString()

  action('stubString 演示')({
    '返回值1': result1,
    '返回值2': result2,
    '两次返回是否同一引用': result1 === result2,
  })
}

export default stubStringDemo
