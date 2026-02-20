import { action } from 'storybook/actions'
import matchesProperty from '../../../packages/js-utils/src/matchesProperty'

const edgeCaseDemo = () => {
  const m = matchesProperty('a', 1)

  action('matchesProperty - 边界情况')({
    '匹配': m({ a: 1 }),
    '不匹配': m({ a: 2 }),
  })
}

export default edgeCaseDemo
