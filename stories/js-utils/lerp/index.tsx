import '../../.css/index.css'
import normalDemo from './normalDemo'
import oneDemo from './oneDemo'
import zeroDemo from './zeroDemo'

const lerpDemo = () => {
  return (
    <div>
      <div className="button" onClick={normalDemo}>
        线性插值 1 和 5 之间进度为 0.5 位置
      </div>
      <div className="button" onClick={zeroDemo}>
        线性插值 1 和 5 之间进度为 0 位置
      </div>
      <div className="button" onClick={oneDemo}>
        线性插值 1 和 5 之间进度为 1 位置
      </div>
    </div>
  )
}

export default lerpDemo
