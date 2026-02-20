import '../../.css/index.css'
import pickDemo from './pickDemo'

const PickDemo = () => {
  return (
    <div>
      <div className="button" onClick={pickDemo}>
        pick 选取属性
      </div>
    </div>
  )
}

export default PickDemo