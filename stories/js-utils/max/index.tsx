import '../../.css/index.css'
import maxDemo from './maxDemo'
import maxByDemo from './maxByDemo'

const MaxDemo = () => {
  return (
    <div>
      <div className="button" onClick={maxDemo}>
        max / min
      </div>
      <div className="button" onClick={maxByDemo}>
        maxBy / minBy
      </div>
    </div>
  )
}

export default MaxDemo
