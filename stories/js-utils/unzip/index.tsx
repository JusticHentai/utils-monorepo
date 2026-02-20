import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import unzipDemo from './unzipDemo'

const UnzipDemo = () => {
  return (
    <div>
      <div className="button" onClick={unzipDemo}>
        unzip 解组
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default UnzipDemo
