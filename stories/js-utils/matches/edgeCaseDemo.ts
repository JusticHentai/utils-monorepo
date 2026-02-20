import { action } from 'storybook/actions'
import matches from '../../../packages/js-utils/src/matches'

const edgeCaseDemo = () => {
  const m = matches({ a: 1 })

  action('matches - 边界情况')({
    '匹配': m({ a: 1, b: 2 }),
    '不匹配': m({ a: 2 }),
  })
}

export default edgeCaseDemo
