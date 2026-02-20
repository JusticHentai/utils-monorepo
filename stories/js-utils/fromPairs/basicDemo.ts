import { action } from 'storybook/actions'
import fromPairs from '../../../packages/js-utils/src/fromPairs'

const basicDemo = () => {
  // 基础：二维数组转对象
  action('fromPairs - 二维数组转对象')(
    fromPairs([['a', 1], ['b', 2]]),
  )

  // 不支持深层路径 — key 是字面量字符串
  action('fromPairs - 点路径作为字面量 key')(
    fromPairs([['a.b', 1]]),
  )

  // 空数组
  action('fromPairs - 空数组')(
    fromPairs([]),
  )
}

export default basicDemo
