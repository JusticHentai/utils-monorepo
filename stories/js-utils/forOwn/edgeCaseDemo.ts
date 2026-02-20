import { action } from 'storybook/actions'
import forOwn from '../../../packages/js-utils/src/forOwn'

const edgeCaseDemo = () => {
  const r: string[] = []
  forOwn({ a: 1, b: 2 }, (v, k) => r.push(k + ':' + v))

  action('forOwn - 边界情况')({
    '遍历自身': r,
  })
}

export default edgeCaseDemo
