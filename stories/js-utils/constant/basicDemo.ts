import { action } from 'storybook/actions'
import constant from '../../../packages/js-utils/src/constant'

const basicDemo = () => {
  // 始终返回相同值
  const getObj = constant({ a: 1 })

  action('constant - 始终返回相同值')({
    第一次调用: getObj(),
    第二次调用: getObj(),
    引用相同: getObj() === getObj(),
    说明: '无论调用多少次，始终返回同一个引用',
  })

  // 任何参数都不会改变返回值
  const getHello = constant('hello')
  action('constant - 忽略所有传入参数')({
    '无参数': getHello(),
    '传入参数': (getHello as Function)(1, 2, 3),
    说明: '传入任何参数都被忽略，始终返回创建时的值',
  })

  // 支持假值
  action('constant - 支持假值')({
    'constant(0)()': constant(0)(),
    'constant(false)()': constant(false)(),
    'constant(null)()': constant(null)(),
    'constant("")()': constant('')(),
  })
}

export default basicDemo
