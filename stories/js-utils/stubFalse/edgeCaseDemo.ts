import { action } from 'storybook/actions'
import stubFalse from '../../../packages/js-utils/src/stubFalse'

const edgeCaseDemo = () => {
  const r1 = stubFalse()
  const r2 = stubFalse()
  action('stubFalse - 边界情况')({
    '返回值': r1,
    '类型': typeof r1,
    '严格等于 false': r1 === false,
    '两次调用结果相等': r1 === r2,
  })
}

export default edgeCaseDemo
