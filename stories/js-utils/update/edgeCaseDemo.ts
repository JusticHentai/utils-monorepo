import { action } from 'storybook/actions'
import update from '../../../packages/js-utils/src/update'

const edgeCaseDemo = () => {
  action('update - 边界情况')({
    '更新值': (() => { const o = { a: [{ b: 2 }] }; update(o, 'a[0].b', n => n * n); return o })()
  })
}

export default edgeCaseDemo
