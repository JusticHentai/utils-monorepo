import { action } from 'storybook/actions'
import pullAll from '../../../packages/js-utils/src/pullAll'

const edgeCaseDemo = () => {
  const a1 = [1, 2, 3, 1, 2]
  pullAll(a1, [1, 2])

  const a2: number[] = []
  pullAll(a2, [1])

  action('pullAll - 边界情况')({
    '移除多个': a1,
    '空数组': a2,
  })
}

export default edgeCaseDemo
