import { action } from 'storybook/actions'
import supportIntersectionObserver from '../../../packages/element-utils/src/supportIntersectionObserver'

const basicDemo = () => {
  const result = supportIntersectionObserver()

  action('supportIntersectionObserver 检测结果')({
    supported: result,
    message: result
      ? 'IntersectionObserver 可用，可以使用懒加载等功能'
      : 'IntersectionObserver 不可用，需要使用 polyfill',
  })
}

export default basicDemo
