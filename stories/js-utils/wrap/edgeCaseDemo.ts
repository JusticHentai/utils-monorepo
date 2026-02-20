import { action } from 'storybook/actions'
import wrap from '../../../packages/js-utils/src/wrap'

const edgeCaseDemo = () => {
  const p = wrap('hello', (fn, text) => '<p>' + fn + ' ' + text + '</p>')
  action('wrap - 边界情况')({
    '包装结果': p('world'),
  })
}

export default edgeCaseDemo
