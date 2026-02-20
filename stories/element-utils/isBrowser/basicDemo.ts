import { action } from 'storybook/actions'
import isBrowser from '../../../packages/element-utils/src/isBrowser'

const basicDemo = () => {
  const result = isBrowser()

  action('isBrowser 检测结果')({
    isBrowser: result,
    hasWindow: typeof window !== 'undefined',
    hasDocument: typeof document !== 'undefined',
  })
}

export default basicDemo
