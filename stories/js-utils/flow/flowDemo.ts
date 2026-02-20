import { action } from 'storybook/actions'
import flow from '../../../packages/js-utils/src/flow'

const flowDemo = () => {
  const add10 = (n: number) => n + 10
  const multiply2 = (n: number) => n * 2
  const pipe = flow([add10, multiply2])

  action('flow - (5 + 10) * 2')(pipe(5))
}

export default flowDemo
