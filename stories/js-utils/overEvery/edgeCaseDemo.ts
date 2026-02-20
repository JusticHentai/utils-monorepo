import { action } from 'storybook/actions'
import overEvery from '../../../packages/js-utils/src/overEvery'

const edgeCaseDemo = () => {
  const check = overEvery([n => n > 0, n => n < 10])
  action('overEvery - 边界情况')({
    '5 (满足)': check(5),
    '-1 (不满足)': check(-1),
    '10 (不满足)': check(10),
  })
}

export default edgeCaseDemo
