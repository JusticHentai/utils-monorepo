import { action } from 'storybook/actions'
import toPathArray from '../../../packages/js-utils/src/toPathArray'

const edgeCaseDemo = () => {
  action('toPathArray - 边界情况')({
    '空字符串': toPathArray(''),
    '空数组': toPathArray([]),
    '单层属性': toPathArray('a'),
    '连续索引': toPathArray('[0][1][2]'),
    '单引号属性': toPathArray("a['key']"),
  })
}

export default edgeCaseDemo
