import '../../.css/index.css'
import failDemo from './failDemo'
import successDemo from './successDemo'

const retryFormatDemo = () => {
  return (
    <div>
      <div className="button" onClick={successDemo}>
        重试成功用例
      </div>
      <div className="button" onClick={failDemo}>
        重试失败用例
      </div>
    </div>
  )
}

export default retryFormatDemo
