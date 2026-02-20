import { action } from 'storybook/actions'
import forInRight from '../../../packages/js-utils/src/forInRight'

const edgeCaseDemo = () => {
  const r: string[] = []
  forInRight({ a: 1, b: 2 }, (v, k) => r.push(k + ':' + v))

  action('forInRight - 边界情况')({
    '反向遍历含继承': r,
  })
}

export default edgeCaseDemo
