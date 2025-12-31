import { action } from 'storybook/actions'
import '../../.css/index.css'
import basicDemo from './basicDemo'

const AddClipboardDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={async () => {
          const res = await basicDemo()
          action('复制文本到剪贴板')(res)
        }}
      >
        复制 "Hello World" 到剪贴板
      </div>
    </div>
  )
}

export default AddClipboardDemo
