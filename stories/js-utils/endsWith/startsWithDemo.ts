import { action } from 'storybook/actions'
import { startsWith } from '../../../packages/js-utils/src/endsWith'

const startsWithDemo = () => {
  action('startsWith')({
    '"abc" 以 "a" 开头': startsWith('abc', 'a'),
    '"abc" 以 "b" 开头': startsWith('abc', 'b'),
    '"abc" 从位置1以 "b" 开头': startsWith('abc', 'b', 1),
  })
}

export default startsWithDemo
