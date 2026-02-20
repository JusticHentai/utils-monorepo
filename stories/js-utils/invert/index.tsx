import '../../.css/index.css'
import invertDemo from './invertDemo'
import invertByDemo from './invertByDemo'

const InvertDemo = () => {
  return (
    <div>
      <div className="button" onClick={invertDemo}>
        基础反转
      </div>
      <div className="button" onClick={invertByDemo}>
        invertBy 分组反转
      </div>
    </div>
  )
}

export default InvertDemo
