import { action } from 'storybook/actions'
import truncateText from '../../../packages/element-utils/src/truncateText'

const optionalDemo = () => {
  const missingText: string | undefined = undefined

  action('可选文本截断结果')({
    undefinedInput: truncateText(missingText, 10),
    zeroLength: truncateText('error', 0),
    negativeLength: truncateText('error', -1),
  })
}

export default optionalDemo
