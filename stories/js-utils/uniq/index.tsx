import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import uniqDemo from './uniqDemo'

const UniqDemo = () => {
  return (
    <div>
      <div className="button" onClick={uniqDemo}>
        数组去重
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default UniqDemo
