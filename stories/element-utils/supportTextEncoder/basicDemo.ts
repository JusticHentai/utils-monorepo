import { action } from 'storybook/actions'
import supportTextEncoder from '../../../packages/element-utils/src/supportTextEncoder'

const basicDemo = () => {
  const supported = supportTextEncoder()

  action('supportTextEncoder 检测结果')({
    supported,
    globalType: typeof TextEncoder,
    behavior: supported
      ? 'estimateBytes 会使用 TextEncoder 计算 UTF-8 字节数'
      : 'estimateBytes 会降级为 string.length',
  })
}

export default basicDemo
