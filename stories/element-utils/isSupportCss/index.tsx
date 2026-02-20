import '../../.css/index.css'
import basicDemo from './basicDemo'
import gridDemo from './gridDemo'

const IsSupportCssDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        检测 flex 支持
      </div>
      <div className="button" onClick={gridDemo}>
        检测 grid 支持
      </div>
    </div>
  )
}

export default IsSupportCssDemo
