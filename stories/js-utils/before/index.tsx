import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import beforeDemo from './beforeDemo'

const BeforeDemo = () => {
  return (
    <div>
      <div className="button" onClick={beforeDemo}>
        创建一个函数，最多只能调用 n 次
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default BeforeDemo
