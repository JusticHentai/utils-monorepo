import { action } from 'storybook/actions'
import defaultTo from '../../../packages/js-utils/src/defaultTo'

const edgeCaseDemo = () => {
  action('defaultTo - 边界情况')({
    '非空值': defaultTo(1, 10), 'null': defaultTo(null, 10), 'undefined': defaultTo(undefined, 10), 'NaN': defaultTo(NaN, 10)
  })
}

export default edgeCaseDemo
