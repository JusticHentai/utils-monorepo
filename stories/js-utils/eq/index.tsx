import '../../.css/index.css'
import eqDemo from './eqDemo'
import edgeCaseDemo from './edgeCaseDemo'

const EqDemo = () => {
  return (
    <div>
      <div className="button" onClick={eqDemo}>
        eq - SameValueZero 比较
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        eq - 边界情况
      </div>
    </div>
  )
}

export default EqDemo
