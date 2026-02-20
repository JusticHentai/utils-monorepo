import { action } from 'storybook/actions'
import groupBy from '../../../packages/js-utils/src/groupBy'

const propertyDemo = () => {
  // 按对象属性分组
  const users = [
    { name: 'Alice', dept: 'eng' },
    { name: 'Bob', dept: 'sales' },
    { name: 'Charlie', dept: 'eng' },
    { name: 'Dave', dept: 'sales' },
  ]
  action('groupBy - 按部门分组')(
    groupBy(users, 'dept'),
  )

  // 二维数组按索引分组
  const data = [
    [1, 'a'],
    [2, 'a'],
    [2, 'b'],
  ] as [number, string][]
  action('groupBy - 二维数组按第一列分组')(
    groupBy(data, (item) => item[0]),
  )
}

export default propertyDemo
