import { action } from 'storybook/actions'
import bind from '../../../packages/js-utils/src/bind'

const edgeCaseDemo = () => {
  // 无预设参数，仅绑定 this
  const getThis = function (this: { v: number }) {
    return this.v
  }
  const bound0 = bind(getThis, { v: 42 })

  // 预设全部参数
  const sum = function (this: unknown, a: number, b: number, c: number) {
    return a + b + c
  }
  const boundAll = bind(sum, null, 1, 2, 3)

  // 预设参数 + 调用参数合并
  const collect = function (this: unknown, ...args: unknown[]) {
    return args
  }
  const boundPartial = bind(collect, null, 'a', 'b')

  // this 为 null
  const noThis = function (this: unknown, x: number) {
    return x * 2
  }
  const boundNull = bind(noThis, null, 5)

  action('bind - 边界情况')({
    '仅绑定 this': bound0(),
    '预设全部参数': boundAll(),
    '预设参数 + 调用参数': boundPartial('c', 'd'),
    'this 为 null': boundNull(),
  })
}

export default edgeCaseDemo
