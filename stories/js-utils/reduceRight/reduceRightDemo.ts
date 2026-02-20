import { action } from 'storybook/actions'
import reduceRight from '../../../packages/js-utils/src/reduceRight'

const reduceRightDemo = () => {
  action('reduceRight 演示')({
    '从右拼接': reduceRight([[0, 1], [2, 3], [4, 5]], (flattened, other) => flattened.concat(other), []),
  })
}

export default reduceRightDemo
