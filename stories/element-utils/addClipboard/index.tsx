import '../../.css/index.css'
import basicDemo from './basicDemo'

const AddClipboardDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        复制 "Hello World" 到剪贴板
      </div>
    </div>
  )
}

export default AddClipboardDemo
