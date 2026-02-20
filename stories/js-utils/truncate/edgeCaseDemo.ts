import { action } from 'storybook/actions'
import truncate from '../../../packages/js-utils/src/truncate'

const edgeCaseDemo = () => {
  action('truncate - 边界情况')({
    '短文本': truncate('hi-diddly', { length: 24 }), '截断': truncate('hi-diddly-ho there, neighborino', { length: 24 }), '自定义省略': truncate('hi-diddly-ho there', { length: 10, omission: '***' })
  })
}

export default edgeCaseDemo
