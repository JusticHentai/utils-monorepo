import { action } from 'storybook/actions'
import zipObject from '../../../packages/js-utils/src/zipObject'

const edgeCaseDemo = () => {
  action('zipObject - 边界情况')({
    '正常': zipObject(['a','b'], [1,2]), '键多于值': zipObject(['a','b','c'], [1,2]), '空数组': zipObject([], [])
  })
}

export default edgeCaseDemo
