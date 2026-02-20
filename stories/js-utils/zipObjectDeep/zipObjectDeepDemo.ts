import { action } from 'storybook/actions'
import zipObjectDeep from '../../../packages/js-utils/src/zipObjectDeep'

const zipObjectDeepDemo = () => {
  action('zipObjectDeep 演示')({
    '深层路径配对': zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]),
  })
}

export default zipObjectDeepDemo
