import { action } from 'storybook/actions'
import setWith from '../../../packages/js-utils/src/setWith'

const setWithDemo = () => {
  // 基础深层设置
  const obj1 = {} as Record<string, any>
  setWith(obj1, 'a.b.c', 42)
  action('setWith - 基础深层设置')(obj1)

  // 使用 customizer 强制用对象代替数组
  // (lodash: setWith({'0':{}}, '[0][1][2]', 3, fn) => {'0':{'1':{'2':3}}})
  const obj2 = { '0': {} } as Record<string, any>
  setWith(obj2, '[0][1][2]', 3, (value) => {
    return typeof value === 'object' && value !== null ? undefined : {}
  })
  action('setWith - customizer强制对象')(obj2)

  // customizer返回undefined时使用默认行为
  // (lodash: setWith({}, 'a[0].b.c', 4, noop) => {a:[{b:{c:4}}]})
  const obj3 = {} as Record<string, any>
  setWith(obj3, 'a[0].b.c', 4, () => undefined)
  action('setWith - customizer返回undefined')(obj3)

  // 数组路径
  const obj4 = {} as Record<string, any>
  setWith(obj4, ['x', 'y', 'z'], 'deep')
  action('setWith - 数组路径')(obj4)

  // 覆盖已有值
  const obj5 = { a: { b: 1 } } as Record<string, any>
  setWith(obj5, 'a.b', 2)
  action('setWith - 覆盖已有值')(obj5)
}

export default setWithDemo