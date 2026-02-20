import { action } from 'storybook/actions'
import reduceRight from '../../../packages/js-utils/src/reduceRight'

const edgeCaseDemo = () => {
  action('reduceRight - 边界情况')({
    '右起拼接': reduceRight([1, 2, 3], (acc, n) => acc + n, 0), '空数组': reduceRight([], (a, n) => a, 0)
  })
}

export default edgeCaseDemo
