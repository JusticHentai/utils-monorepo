import { action } from 'storybook/actions'
import zipObject from '../../../packages/js-utils/src/zipObject'
import zipObjectDeep from '../../../packages/js-utils/src/zipObjectDeep'
import zipWith from '../../../packages/js-utils/src/zipWith'

const zipObjectDemo = () => {
  // zipObject - 键值数组合并为对象
  action('zipObject - 基础')(zipObject(['barney', 'fred'], [36, 40]))

  // 忽略多余的值
  action('zipObject - 忽略多余值')(zipObject(['a'], [1, 2]))

  // 多余的键赋值 undefined
  action('zipObject - 多余键为 undefined')(zipObject(['a', 'b'], [1]))

  // zipObjectDeep - 支持深层路径
  action('zipObjectDeep - 深层路径')(zipObjectDeep(['a.b.c'], [1]))

  // zipWith - 自定义组合
  action('zipWith - 求和')(
    zipWith([[1, 2, 3], [10, 20, 30], [100, 200, 300]], (...values: number[]) =>
      values.reduce((a, b) => a + b, 0)
    )
  )
}

export default zipObjectDemo
