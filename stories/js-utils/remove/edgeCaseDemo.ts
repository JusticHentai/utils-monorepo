import { action } from 'storybook/actions'
import remove from '../../../packages/js-utils/src/remove'

const edgeCaseDemo = () => {
  const a1 = [1, 2, 3, 4]
  const r1 = remove(a1, (n) => n % 2 === 0)

  const a2: number[] = []
  const r2 = remove(a2, () => true)

  action('remove - 边界情况')({
    '移除偶数': { 剩余: a1, 移除: r1 },
    '空数组': { 剩余: a2, 移除: r2 },
  })
}

export default edgeCaseDemo
