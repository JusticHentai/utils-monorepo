import { action } from 'storybook/actions'
import unzip from '../../../packages/js-utils/src/unzip'

const edgeCaseDemo = () => {
  action('unzip - 边界情况')({
    '测试': unzip([])
  })
}

export default edgeCaseDemo
