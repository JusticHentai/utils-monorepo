import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import updateDemo from './updateDemo'

const UpdateDemo = () => {
  return (
    <div>
      <div className="button" onClick={updateDemo}>
        更新值
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default UpdateDemo
