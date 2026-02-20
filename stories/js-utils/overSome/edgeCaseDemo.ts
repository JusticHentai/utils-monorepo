import { action } from 'storybook/actions'
import overSome from '../../../packages/js-utils/src/overSome'

const edgeCaseDemo = () => {
  const check = overSome([n => n > 10, n => n < 0])
  action('overSome - 边界情况')({
    '15 (满足>10)': check(15),
    '-1 (满足<0)': check(-1),
    '5 (不满足)': check(5),
  })
}

export default edgeCaseDemo
