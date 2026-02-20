import { action } from 'storybook/actions'
import lastIndexOf from '../../../packages/js-utils/src/lastIndexOf'

const lastIndexOfDemo = () => {
  action('lastIndexOf 演示')({
    '2 的最后索引': lastIndexOf([1, 2, 1, 2], 2),
    '从索引 2 开始搜索': lastIndexOf([1, 2, 1, 2], 2, 2),
  })
}

export default lastIndexOfDemo
