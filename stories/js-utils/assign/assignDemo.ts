import { action } from 'storybook/actions'
import assign from '../../../packages/js-utils/src/assign'

const assignDemo = () => {
  // 基础合并
  action('assign - 基础属性合并')({
    输入: ['{ a: 1 }', '{ b: 2 }'],
    结果: assign({ a: 1 }, { b: 2 }),
  })

  // 多个源对象
  action('assign - 多个源对象')({
    输入: ['{ a: 1 }', '{ b: 2 }', '{ c: 3 }'],
    结果: assign({ a: 1 }, { b: 2 }, { c: 3 }),
  })

  // 后续源覆盖前面的值
  action('assign - 同名属性覆盖')({
    输入: ['{ a: 1, b: 2 }', '{ b: 2, c: 2 }', '{ c: 3 }'],
    结果: assign({ a: 1, b: 2 }, { b: 2, c: 2 }, { c: 3 }),
    说明: '后续源对象的同名属性会覆盖前面的值',
  })
}

export default assignDemo
