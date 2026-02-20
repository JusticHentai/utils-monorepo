import { action } from 'storybook/actions'
import wrap from '../../../packages/js-utils/src/wrap'

const wrapDemo = () => {
  // 基础：字符串包装
  const hello = wrap('Hello', (value: string, name: unknown) => value + ', ' + name + '!')
  action('wrap - 字符串包装')({
    'hello("World")': hello('World'),
    'hello("Alice")': hello('Alice'),
  })

  // 包装函数接收正确参数：[value, ...args]
  let capturedArgs: unknown[] = []
  const noop = () => {}
  const wrapped = wrap(noop, (...args: unknown[]) => {
    capturedArgs = args
  })
  wrapped(1, 2, 3)
  action('wrap - 包装函数接收 [value, ...args]')({
    参数长度: capturedArgs.length,
    '第一个是原函数': capturedArgs[0] === noop,
    '后续参数': [capturedArgs[1], capturedArgs[2], capturedArgs[3]],
  })

  // 数值包装
  const double = wrap(2, (multiplier: number, value: unknown) => multiplier * (value as number))
  action('wrap - 数值包装')({
    'double(5)': double(5),
    'double(10)': double(10),
  })

  // HTML 包装
  const escapeHtml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;')
  const p = wrap(escapeHtml, (func: (s: string) => string, text: unknown) =>
    '<p>' + func(text as string) + '</p>'
  )
  action('wrap - HTML 包装')(p('fred, barney, & pebbles'))
}

export default wrapDemo
