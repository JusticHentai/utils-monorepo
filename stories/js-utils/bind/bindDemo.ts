import { action } from 'storybook/actions'
import bind from '../../../packages/js-utils/src/bind'

const bindDemo = () => {
  // 基础绑定 this
  const greet = function(this: { name: string }, greeting: string) {
    return `${greeting}, ${this.name}!`
  }

  const boundGreet = bind(greet, { name: 'Alice' })
  action('bind - 绑定 this')({
    结果: boundGreet('Hello'),
    说明: 'this.name 被绑定为 Alice',
  })

  // 部分应用参数
  const fn = function(this: { id: number }, a: string, b: string, c: string) {
    return { thisId: this.id, args: [a, b, c] }
  }

  const obj = { id: 1 }
  const bound1 = bind(fn, obj, 'a')
  const bound2 = bind(fn, obj, 'a', 'b')

  action('bind - 部分应用参数')({
    '预设1个参数后调用': bound1('b', 'c'),
    '预设2个参数后调用': bound2('c'),
    说明: '预设的参数会排在调用参数前面',
  })
}

export default bindDemo
