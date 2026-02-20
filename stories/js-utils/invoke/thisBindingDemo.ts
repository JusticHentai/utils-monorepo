import { action } from 'storybook/actions'
import invoke from '../../../packages/js-utils/src/invoke'

const thisBindingDemo = () => {
  const object = {
    a: {
      value: 42,
      getValue() {
        return (this as any).value
      },
    },
  }

  action('invoke this 绑定')({
    说明: 'invoke 使用 method.apply(parent, args)，this 指向方法所在的父对象',
    结果: invoke(object, 'a.getValue'),
  })
}

export default thisBindingDemo
