import { action } from 'storybook/actions'
import { forOwn } from '../../../packages/js-utils/src/forIn'

const forOwnDemo = () => {
  const result: string[] = []
  forOwn({ x: 10, y: 20 }, (value, key) => {
    result.push(`${key}=${value}`)
  })
  action('forOwn - 仅自有属性')(result)
}

export default forOwnDemo
