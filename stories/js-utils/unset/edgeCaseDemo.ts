import { action } from 'storybook/actions'
import unset from '../../../packages/js-utils/src/unset'

const edgeCaseDemo = () => {
  action('unset - 边界情况')({
    '测试': unset({})
  })
}

export default edgeCaseDemo
