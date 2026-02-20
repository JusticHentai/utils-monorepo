import { action } from 'storybook/actions'
import findKey from '../../../packages/js-utils/src/findKey'

const edgeCaseDemo = () => {
  action('findKey - 边界情况')({
    '找到': findKey({ a: 1, b: 2 }, v => v === 2), '未找到': findKey({ a: 1 }, v => v === 5), '空对象': findKey({}, v => true)
  })
}

export default edgeCaseDemo
