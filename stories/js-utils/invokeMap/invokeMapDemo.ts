import { action } from 'storybook/actions'
import invokeMap from '../../../packages/js-utils/src/invokeMap'

const invokeMapDemo = () => {
  // 调用每个元素的方法
  action('invokeMap - toUpperCase')(
    invokeMap(['a', 'b', 'c'], 'toUpperCase'),
  )

  // 排序
  action('invokeMap - sort')(
    invokeMap([[5, 1, 7], [3, 2, 1]], 'sort'),
  )
}

export default invokeMapDemo
