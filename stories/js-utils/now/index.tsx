import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import nowDemo from './nowDemo'

const NowDemo = () => {
  return (
    <div>
      <div className="button" onClick={nowDemo}>
        获取时间戳
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default NowDemo
