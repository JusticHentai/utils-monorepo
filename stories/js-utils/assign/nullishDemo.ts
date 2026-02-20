import { action } from 'storybook/actions'
import assign from '../../../packages/js-utils/src/assign'

const nullishDemo = () => {
  // null/undefined 值正常赋值
  const result = assign({ a: 1, b: 2 }, { a: null, b: undefined, c: null })

  action('assign - nullish 值赋值')({
    输入: ['{ a: 1, b: 2 }', '{ a: null, b: undefined, c: null }'],
    结果: result,
    说明: 'null 和 undefined 作为源值时会正常覆盖目标属性',
  })

  // 字符串源被转换为对象
  const strResult = assign({}, 'abc')
  action('assign - 字符串源转对象')({
    输入: ['{}', '"abc"'],
    结果: strResult,
    说明: '字符串会被当作类数组对象，索引作为 key',
  })
}

export default nullishDemo
