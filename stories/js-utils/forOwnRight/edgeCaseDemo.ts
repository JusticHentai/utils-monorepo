import { action } from 'storybook/actions'
import forOwnRight from '../../../packages/js-utils/src/forOwnRight'

const edgeCaseDemo = () => {
  const r: string[] = []
  forOwnRight({ a: 1, b: 2 }, (v, k) => r.push(k + ':' + v))

  action('forOwnRight - 边界情况')({
    '反向遍历自身': r,
  })
}

export default edgeCaseDemo
