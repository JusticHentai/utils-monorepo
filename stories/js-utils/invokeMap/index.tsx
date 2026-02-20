import '../../.css/index.css'
import invokeMapDemo from './invokeMapDemo'
import invokeMapFnDemo from './invokeMapFnDemo'

const InvokeMapDemo = () => {
  return (
    <div>
      <div className="button" onClick={invokeMapDemo}>
        调用方法名
      </div>
      <div className="button" onClick={invokeMapFnDemo}>
        调用自定义函数
      </div>
    </div>
  )
}

export default InvokeMapDemo
