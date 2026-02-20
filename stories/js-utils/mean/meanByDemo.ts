import { action } from 'storybook/actions'
import meanBy from '../../../packages/js-utils/src/meanBy'

const meanByDemo = () => {
  const scores = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 78 },
  ]

  action('meanBy - 平均分')({
    输入: scores,
    结果: meanBy(scores, (s) => s.score),
  })
}

export default meanByDemo
