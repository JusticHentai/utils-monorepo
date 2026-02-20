import { action } from 'storybook/actions'
import unzipWith from '../../../packages/js-utils/src/unzipWith'

const unzipWithDemo = () => {
  action('unzipWith 演示')({
    '解压后相加': unzipWith([[1, 10, 100], [2, 20, 200]], (...group) => group.reduce((a, b) => a + b, 0)),
  })
}

export default unzipWithDemo
