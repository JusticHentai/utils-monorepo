import { action } from 'storybook/actions'
import toPathArray from '../../../packages/js-utils/src/toPathArray'

const toPathArrayDemo = () => {
  action('toPathArray 基础用法')({
    '点号分隔': toPathArray('a.b.c'),
    '数字索引': toPathArray('a[0].b'),
    '引号属性': toPathArray('a["key"].b'),
    '混合路径': toPathArray('a[0].b["c"].d'),
    '数组传入': toPathArray(['a', 'b', 'c']),
  })
}

export default toPathArrayDemo
