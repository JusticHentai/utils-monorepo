import { action } from 'storybook/actions'
import stubString from '../../../packages/js-utils/src/stubString'

const edgeCaseDemo = () => {
  const r1 = stubString()
  action('stubString - 边界情况')({
    '返回值': JSON.stringify(r1),
    '类型': typeof r1,
    '长度为0': r1.length === 0,
    '严格等于空字符串': r1 === '',
  })
}

export default edgeCaseDemo
