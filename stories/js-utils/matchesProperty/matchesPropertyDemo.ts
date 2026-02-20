import { action } from 'storybook/actions'
import matchesProperty from '../../../packages/js-utils/src/matchesProperty'

const matchesPropertyDemo = () => {
  // lodash 测试: 基础属性匹配
  const objects = [
    { a: 1, b: 2, c: 3 },
    { a: 4, b: 5, c: 6 },
  ]

  const matchA1 = matchesProperty('a', 1)
  action('matchesProperty - 基础匹配')({
    'matchesProperty("a", 1)(objects[0])': matchA1(objects[0]),
    'matchesProperty("a", 1)(objects[1])': matchA1(objects[1]),
    说明: '检查属性 a 是否等于 1',
  })

  // 深层路径 (lodash 测试)
  const deepObj = { a: { b: 2 } }
  const matchDeep = matchesProperty('a.b', 2)
  action('matchesProperty - 深层路径')({
    'matchesProperty("a.b", 2)': matchDeep(deepObj),
    说明: '支持 dot notation 路径',
  })

  // 数组路径 (lodash 测试)
  const matchArr = matchesProperty(['a', 'b'], 2)
  action('matchesProperty - 数组路径')({
    'matchesProperty(["a", "b"], 2)': matchArr(deepObj),
  })

  // 路径不存在返回 false (lodash 测试)
  const matchMissing = matchesProperty('x.y.z', 1)
  action('matchesProperty - 路径不存在')({
    'matchesProperty("x.y.z", 1)({})': matchMissing({} as any),
    期望: false,
  })

  // 实际使用: filter
  const users = [
    { name: 'Alice', info: { active: true } },
    { name: 'Bob', info: { active: false } },
    { name: 'Charlie', info: { active: true } },
  ]
  const isActive = matchesProperty('info.active', true)
  action('matchesProperty - 过滤活跃用户')({
    结果: users.filter(isActive),
  })
}

export default matchesPropertyDemo