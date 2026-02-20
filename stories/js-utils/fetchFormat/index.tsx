import '../../.css/index.css'
import errorDemo from './errorDemo'
import successDemo from './successDemo'
import timeoutDemo from './timeoutDemo'

const fetchFormatDemo = () => {
  return (
    <div>
      <div className="button" onClick={successDemo}>
        请求成功用例
      </div>
      <div className="button" onClick={errorDemo}>
        请求失败用例（重试后仍失败）
      </div>
      <div className="button" onClick={timeoutDemo}>
        超时用例
      </div>
    </div>
  )
}

export default fetchFormatDemo
