import { action } from 'storybook/actions'
import truncateText from '../../../packages/element-utils/src/truncateText'

const basicDemo = () => {
  const text = 'early error message with a very long stack preview'

  action('硬截断结果')({
    original: text,
    maxLength: 18,
    truncated: truncateText(text, 18),
  })
}

export default basicDemo
