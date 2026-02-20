import { action } from 'storybook/actions'
import head, { first } from '../../../packages/js-utils/src/head'

const firstDemo = () => {
  // first 是 head 的别名
  action('first === head')(first === head)

  action('first - 用法与 head 相同')(
    first(['a', 'b', 'c']),
  )
}

export default firstDemo
