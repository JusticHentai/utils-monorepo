import '../../.css/index.css'
import differenceDemo from './differenceDemo'
import edgeCaseDemo from './edgeCaseDemo'

const DifferenceDemo = () => {
  return (
    <div>
      <div className="button" onClick={differenceDemo}>
        difference - 基础差集
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        difference - 边界情况
      </div>
    </div>
  )
}

export default DifferenceDemo
