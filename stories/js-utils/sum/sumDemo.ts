import { action } from 'storybook/actions'
import sum from '../../../packages/js-utils/src/sum'
import sumBy from '../../../packages/js-utils/src/sumBy'

const sumDemo = () => {
  action('sum - 基础')(sum([4, 2, 8, 6]))

  const items = [
    { name: 'A', price: 10 },
    { name: 'B', price: 20 },
    { name: 'C', price: 30 },
  ]
  action('sumBy - 价格总和')(sumBy(items, (item) => item.price))
}

export default sumDemo
