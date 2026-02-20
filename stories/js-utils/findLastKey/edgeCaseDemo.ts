import { action } from 'storybook/actions'
import findLastKey from '../../../packages/js-utils/src/findLastKey'

const edgeCaseDemo = () => {
  action('findLastKey - 边界情况')({
    '找到': findLastKey({ a: 1, b: 2, c: 2 }, v => v === 2), '未找到': findLastKey({ a: 1 }, v => v === 5)
  })
}

export default edgeCaseDemo
