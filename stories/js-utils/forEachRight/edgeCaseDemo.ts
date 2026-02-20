import { action } from 'storybook/actions'
import forEachRight from '../../../packages/js-utils/src/forEachRight'

const edgeCaseDemo = () => {
  const r: number[] = []
  forEachRight([1, 2, 3], (v) => r.push(v))

  action('forEachRight - 边界情况')({
    '反向遍历数组': r,
  })
}

export default edgeCaseDemo
