import { action } from 'storybook/actions'
import split from '../../../packages/js-utils/src/split'

const splitDemo = () => {
  // 字符串分隔符
  action('split - 字符串分隔符')({
    输入: "split('abcde', 'c')",
    结果: split('abcde', 'c'),
  })

  // 正则分隔符
  action('split - 正则分隔符')({
    输入: "split('abcde', /[bd]/)",
    结果: split('abcde', /[bd]/),
  })

  // 限制数量
  action('split - 空字符串分隔+限制数量')({
    输入: "split('abcde', '', 2)",
    结果: split('abcde', '', 2),
  })

  // 逗号分隔
  action('split - 逗号分隔')({
    输入: "split('a,b,c', ',')",
    结果: split('a,b,c', ','),
  })

  // null 安全
  action('split - null 输入返回空数组')({
    输入: 'split(null)',
    结果: split(null as unknown as string),
  })
}

export default splitDemo
