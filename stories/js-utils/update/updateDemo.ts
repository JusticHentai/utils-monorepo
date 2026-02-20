import { action } from 'storybook/actions'
import update from '../../../packages/js-utils/src/update'

const updateDemo = () => {
  const obj = { a: { b: { c: 1 } } }
  update(obj, 'a.b.c', (n) => n + 1)
  action('update - 递增')({ 结果: obj })

  const data = { counts: { views: 100 } }
  update(data, 'counts.views', (v) => v * 2)
  action('update - 翻倍')({ 结果: data })
}

export default updateDemo
