import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import normalDemo from './normalDemo'

const secondsToHHMMSSDemo = () => {
  return (
    <div>
      <div className="button" onClick={normalDemo}>
        126 秒转换为时分秒
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default secondsToHHMMSSDemo
