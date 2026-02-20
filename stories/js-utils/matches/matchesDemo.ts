import { action } from 'storybook/actions'
import matches from '../../../packages/js-utils/src/matches'

const matchesDemo = () => {
  const objects = [{ a: 1, b: 2, c: 3 }, { a: 4, b: 5, c: 6 }]
  action('matches 演示')({ '匹配 { a: 4, c: 6 }': objects.filter(matches({ a: 4, c: 6 })) })
}

export default matchesDemo
