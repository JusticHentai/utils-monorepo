import { action } from 'storybook/actions'
import zipObjectDeep from '../../../packages/js-utils/src/zipObjectDeep'

const edgeCaseDemo = () => {
  action('zipObjectDeep - 边界情况')({
    '深层路径': zipObjectDeep(['a.b[0]','a.b[1]'], [1,2]), '空数组': zipObjectDeep([], [])
  })
}

export default edgeCaseDemo
