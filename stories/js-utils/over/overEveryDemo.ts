import { action } from 'storybook/actions'
import { overEvery, overSome } from '../../../packages/js-utils/src/over'

const overEveryDemo = () => {
  const isPositiveEven = overEvery([(n: number) => n > 0, (n: number) => n % 2 === 0])

  action('overEvery - 4（正偶数）')(isPositiveEven(4))
  action('overEvery - 3（正奇数）')(isPositiveEven(3))
  action('overEvery - -2（负偶数）')(isPositiveEven(-2))

  const isStringOrNumber = overSome([(v: unknown) => typeof v === 'string', (v: unknown) => typeof v === 'number'])

  action('overSome - "hello"')(isStringOrNumber('hello'))
  action('overSome - 42')(isStringOrNumber(42))
  action('overSome - true')(isStringOrNumber(true))
}

export default overEveryDemo
