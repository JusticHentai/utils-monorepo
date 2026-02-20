import { action } from 'storybook/actions'
import stubTrue from '../../../packages/js-utils/src/stubTrue'

const edgeCaseDemo = () => {
  const r1 = stubTrue()
  const r2 = stubTrue()
  action('stubTrue - 边界情况')({
    '返回值': r1,
    '类型': typeof r1,
    '严格等于 true': r1 === true,
    '两次调用结果相等': r1 === r2,
  })
}

export default edgeCaseDemo
