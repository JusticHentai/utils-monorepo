import { action } from 'storybook/actions'
import omitBy from '../../../packages/js-utils/src/omitBy'

const edgeCaseDemo = () => {
  action('omitBy - 边界情况')({
    '过滤': omitBy({ a: 1, b: '2', c: 3 }, v => typeof v === 'number'), '空对象': omitBy({}, () => true)
  })
}

export default edgeCaseDemo
