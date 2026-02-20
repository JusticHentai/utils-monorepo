import { action } from 'storybook/actions'
import endsWith from '../../../packages/js-utils/src/endsWith'

const endsWithDemo = () => {
  const str = 'abc'

  // 基础匹配
  action('endsWith - 基础匹配')({
    '"abc" 以 "c" 结尾': endsWith(str, 'c'),
    '"abc" 以 "b" 结尾': endsWith(str, 'b'),
  })

  // 指定 position
  action('endsWith - 指定 position')({
    'endsWith("abc", "b", 2)': endsWith(str, 'b', 2),
    'endsWith("abc", "ab", 2.2)': endsWith(str, 'ab', 2.2),
  })

  // position >= length 仍正常工作
  action('endsWith - position >= length')({
    'position=3': endsWith(str, 'c', 3),
    'position=5': endsWith(str, 'c', 5),
    'position=Infinity': endsWith(str, 'c', Infinity),
  })

  // 负数 position 视为 0
  action('endsWith - 负数 position')({
    'position=-1 检查 "a"': endsWith(str, 'a', -1),
    'position=-1 检查 ""': endsWith(str, '', -1),
  })
}

export default endsWithDemo
