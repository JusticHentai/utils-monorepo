import { action } from 'storybook/actions'
import countBy from '../../../packages/js-utils/src/countBy'

const basicDemo = () => {
  // 按 Math.floor 分组计数
  action('countBy - 按 Math.floor 分组')({
    输入: [6.1, 4.2, 6.3],
    结果: countBy([6.1, 4.2, 6.3], Math.floor),
    说明: '6.1 和 6.3 都 floor 为 6，4.2 floor 为 4',
  })

  // 按字符串长度计数
  action('countBy - 按字符串长度')({
    输入: ['one', 'two', 'three'],
    结果: countBy(['one', 'two', 'three'], (s) => s.length),
    说明: '"one" 和 "two" 长度 3，"three" 长度 5',
  })

  // 实际应用：统计状态分布
  const tasks = [
    { status: 'done' }, { status: 'done' },
    { status: 'pending' }, { status: 'error' },
  ]
  action('countBy - 统计状态分布')({
    输入: tasks.map(t => t.status),
    结果: countBy(tasks, (t) => t.status),
  })
}

export default basicDemo
