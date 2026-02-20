import { action } from 'storybook/actions'
import property from '../../../packages/js-utils/src/property'

const propertyDemo = () => {
  // 基本属性提取 (lodash: property('a')({a:1}) => 1)
  const getA = property('a')
  action('property - 基本提取')(getA({ a: 1 }))

  // 深层路径 (lodash: property('a.b')({a:{b:2}}) => 2)
  const getAB = property('a.b')
  action('property - 深层路径a.b')(getAB({ a: { b: 2 } }))

  // 数组路径形式 (lodash: property(['a','b'])({a:{b:2}}) => 2)
  const getABArr = property(['a', 'b'])
  action('property - 数组路径形式')(getABArr({ a: { b: 2 } }))

  // 数组索引 (lodash: property(1)([1,2,3]) => 2)
  const getIdx = property('1')
  action('property - 数组索引')(getIdx([1, 2, 3]))

  // 路径缺失返回 undefined (lodash: property('a')({})) => undefined)
  action('property - 路径缺失')(property('a')({}))
  action('property - 深层路径缺失')(property('a.b.c')({}))

  // nullish 对象返回 undefined
  action('property - null对象')(property('a')(null))
  action('property - undefined对象')(property('a')(undefined))

  // 配合 map 使用提取属性
  const users = [
    { name: 'Alice', info: { age: 25 } },
    { name: 'Bob', info: { age: 30 } },
  ]
  action('property - map提取name')(users.map(property('name')))
  action('property - map提取嵌套age')(users.map(property('info.age')))
}

export default propertyDemo