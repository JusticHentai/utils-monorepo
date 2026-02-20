import { action } from 'storybook/actions'
import forIn from '../../../packages/js-utils/src/forIn'

const forInDemo = () => {
  const result: string[] = []
  forIn({ a: 1, b: 2, c: 3 }, (value, key) => {
    result.push(`${key}: ${value}`)
  })
  action('forIn - 遍历所有属性')(result)
}

export default forInDemo
