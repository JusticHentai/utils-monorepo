import { action } from 'storybook/actions'
import constant from '../../../packages/js-utils/src/constant'

const edgeCaseDemo = () => {
  const fn = constant({ a: 1 })
  const r1 = fn()
  const r2 = fn()

  action('constant - 边界情况')({
    '返回值1': r1,
    '返回值2': r2,
    '同引用': r1 === r2,
  })
}

export default edgeCaseDemo
