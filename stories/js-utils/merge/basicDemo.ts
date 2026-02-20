import { action } from 'storybook/actions'
import merge from '../../../packages/js-utils/src/merge'

const basicDemo = () => {
  // lodash 测试: 合并嵌套数组中的对象
  const names = {
    characters: [{ name: 'barney' }, { name: 'fred' }],
  }
  const ages = {
    characters: [{ age: 36 }, { age: 40 }],
  }
  const heights = {
    characters: [{ height: '5\'4"' }, { height: '5\'5"' }],
  }

  action('merge - 多源合并')({
    结果: merge({ ...names }, ages, heights),
    说明: '递归合并三个对象的 characters 数组中的对象',
  })

  // lodash 测试: 四个参数
  action('merge - 多参数覆盖')({
    结果: merge({ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }),
    期望: { a: 4 },
    说明: '后面的源对象覆盖前面的',
  })

  // 嵌套合并
  const obj = { a: [{ b: 2 }, { d: 4 }] }
  const other = { a: [{ c: 3 }, { e: 5 }] }
  action('merge - 递归合并')({
    结果: merge({ ...obj }, other),
    说明: '数组中的对象被递归合并',
  })
}

export default basicDemo