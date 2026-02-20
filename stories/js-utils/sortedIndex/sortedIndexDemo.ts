import { action } from 'storybook/actions'
import sortedIndex from '../../../packages/js-utils/src/sortedIndex'
import sortedLastIndex from '../../../packages/js-utils/src/sortedLastIndex'

const sortedIndexDemo = () => {
  const arr = [10, 20, 30, 30, 40, 50]

  action('sortedIndex - 插入30')({ 数组: arr, 位置: sortedIndex(arr, 30) })
  action('sortedIndex - 插入35')({ 数组: arr, 位置: sortedIndex(arr, 35) })
  action('sortedLastIndex - 插入30(最后)')({ 数组: arr, 位置: sortedLastIndex(arr, 30) })
}

export default sortedIndexDemo
