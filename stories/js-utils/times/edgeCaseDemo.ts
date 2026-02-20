import { action } from 'storybook/actions'
import times from '../../../packages/js-utils/src/times'

const edgeCaseDemo = () => {
  action('times - 边界情况')({
    '执行3次': times(3, n => n * 2), '0次': times(0, n => n), '1次': times(1, n => 'only')
  })
}

export default edgeCaseDemo
