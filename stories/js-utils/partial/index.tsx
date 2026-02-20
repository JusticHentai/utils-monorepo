import '../../.css/index.css'
import partialDemo from './partialDemo'
import partialRightDemo from './partialRightDemo'

const PartialDemo = () => {
  return (
    <div>
      <div className="button" onClick={partialDemo}>
        partial 左侧预设
      </div>
      <div className="button" onClick={partialRightDemo}>
        partialRight 右侧预设
      </div>
    </div>
  )
}

export default PartialDemo
