import { action } from 'storybook/actions'
import addClipboard from '../../../packages/element-utils/src/addClipboard'

const basicDemo = async () => {
  const [res, err] = await addClipboard('Hello World')
  action('复制文本到剪贴板')({ success: res, error: err })
}

export default basicDemo
