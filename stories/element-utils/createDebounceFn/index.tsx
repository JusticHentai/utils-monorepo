import '../../.css/index.css'
import basicDemo from './basicDemo'
import leadingDemo from './leadingDemo'
import cancelDemo from './cancelDemo'

const CreateDebounceFnDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        基础防抖示例
      </div>
      <div className="button" onClick={leadingDemo}>
        leading 模式示例
      </div>
      <div className="button" onClick={cancelDemo}>
        取消防抖示例
      </div>
    </div>
  )
}

export default CreateDebounceFnDemo
