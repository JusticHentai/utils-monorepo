import { action } from 'storybook/actions'
import defaultsDeep from '../../../packages/js-utils/src/defaultsDeep'

const defaultsDeepDemo = () => {
  action('defaultsDeep 演示')({
    '深层默认值': defaultsDeep({ a: { b: 2 } }, { a: { b: 1, c: 3 } }),
  })
}

export default defaultsDeepDemo
