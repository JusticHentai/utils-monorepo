import '../../.css/index.css'
import errorDemo from './errorDemo'
import successDemo from './successDemo'

const AwaitFormatDemo = () => {
  return (
    <>
      <div className="button" onClick={successDemo}>
        请求成功用例
      </div>
      <div className="button" onClick={errorDemo}>
        请求失败用例
      </div>
    </>
  )
}

export default AwaitFormatDemo
