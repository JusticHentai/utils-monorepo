import { action } from 'storybook/actions'
import invoke from '../../../packages/js-utils/src/invoke'

const invokeDemo = () => {
  const object = { a: [{ b: { c: [1, 2, 3, 4] } }] }

  action('invoke 基础用法')({
    '字符串路径调用方法': invoke(object, 'a[0].b.c.slice', 1, 3),
    '数组路径调用方法': invoke(object, ['a', '0', 'b', 'c', 'slice'], 1, 3),
  })
}

export default invokeDemo
