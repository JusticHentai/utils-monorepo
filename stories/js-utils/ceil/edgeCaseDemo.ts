import { action } from 'storybook/actions'
import ceil from '../../../packages/js-utils/src/ceil'

const edgeCaseDemo = () => {
  action('ceil - 边界情况')({
    '正常值 ceil(4.006)': ceil(4.006),
    '精度2 ceil(6.004, 2)': ceil(6.004, 2),
    '负精度 ceil(6040, -2)': ceil(6040, -2),
    '零 ceil(0)': ceil(0),
    '负数 ceil(-4.006)': ceil(-4.006),
    '精度0 ceil(4.1, 0)': ceil(4.1, 0),
  })
}

export default edgeCaseDemo
