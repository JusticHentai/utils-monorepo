import { action } from 'storybook/actions'
import type BaseFunction from '../../../packages/js-utils/src/BaseFunction'

const normalDemo = () => {
  const add: BaseFunction<[number, number], number> = (a, b) => {
    return a + b
  }
  const res = add(1, 2)
  action('BaseFunction 返回结果')(res)
}

export default normalDemo
