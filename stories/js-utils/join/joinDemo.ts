import { action } from 'storybook/actions'
import join from '../../../packages/js-utils/src/join'

const joinDemo = () => {
  action('join - 默认逗号')({
    输入: ['a', 'b', 'c'],
    结果: join(['a', 'b', 'c']),
  })

  action('join - 自定义分隔符')({
    输入: ['2024', '01', '15'],
    分隔符: '-',
    结果: join(['2024', '01', '15'], '-'),
  })

  action('join - 空格分隔')({
    输入: ['Hello', 'World'],
    结果: join(['Hello', 'World'], ' '),
  })
}

export default joinDemo
