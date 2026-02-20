import { action } from 'storybook/actions'
import conforms from '../../../packages/js-utils/src/conforms'

const conformsDemo = () => {
  const isAdult = conforms({
    age: (v: unknown) => (v as number) >= 18,
  })

  action('conforms - 创建验证函数')({
    '{ age: 20 }': isAdult({ age: 20 }),
    '{ age: 10 }': isAdult({ age: 10 }),
  })
}

export default conformsDemo
