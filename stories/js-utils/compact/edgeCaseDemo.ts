import { action } from 'storybook/actions'
import compact from '../../../packages/js-utils/src/compact'

const edgeCaseDemo = () => {
  action('compact - 边界情况')({
    '含falsy': compact([0, 1, false, 2, '', 3, null, undefined, NaN]), '空数组': compact([]), '无falsy': compact([1, 2, 3]), '全falsy': compact([0, false, null])
  })
}

export default edgeCaseDemo
