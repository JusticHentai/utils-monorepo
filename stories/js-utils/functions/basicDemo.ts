import { action } from 'storybook/actions'
import functions, { functionsIn } from '../../../packages/js-utils/src/functions'

const basicDemo = () => {
  // 只返回函数属性名
  const obj = {
    a: 'string',
    b: () => {},
    c: /regex/,
    d: () => {},
  }
  action('functions - 只返回函数属性名')(
    functions(obj).sort(),
  )

  // functions 不包含继承的函数
  class Foo {
    a = () => {}
    b = 'not a function'
  }
  Foo.prototype.c = function() {} as any

  const foo = new Foo()
  action('functions - 不包含继承的函数')(
    functions(foo as any),
  )

  // functionsIn 包含继承的函数
  action('functionsIn - 包含继承的函数')(
    functionsIn(foo as any),
  )
}

export default basicDemo
