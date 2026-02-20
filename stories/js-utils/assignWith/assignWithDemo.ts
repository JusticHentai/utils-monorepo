import { action } from 'storybook/actions'
import assignWith from '../../../packages/js-utils/src/assignWith'

const assignWithDemo = () => {
  action('assignWith 演示')({
    '自定义分配': assignWith(
      { a: 1, b: undefined },
      { a: 2, b: 3 },
      (objVal, srcVal) => objVal === undefined ? srcVal : objVal
    ),
  })
}

export default assignWithDemo
