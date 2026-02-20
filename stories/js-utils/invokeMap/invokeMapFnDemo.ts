import { action } from 'storybook/actions'
import invokeMap from '../../../packages/js-utils/src/invokeMap'

const invokeMapFnDemo = () => {
  // 使用函数而不是方法名
  action('invokeMap - 自定义函数')(
    invokeMap(['a', 'b', 'c'], function(this: string, left: string, right: string) {
      return left + this.toUpperCase() + right
    }, '(', ')'),
  )
}

export default invokeMapFnDemo
