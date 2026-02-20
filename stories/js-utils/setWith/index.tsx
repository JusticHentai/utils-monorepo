import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import setWithDemo from './setWithDemo'

const SetWithDemo = () => {
  return (
    <div>
      <div className="button" onClick={setWithDemo}>
        设置值
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default SetWithDemo
