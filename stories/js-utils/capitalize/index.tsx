import '../../.css/index.css'
import capitalizeDemo from './capitalizeDemo'
import upperFirstDemo from './upperFirstDemo'

const CapitalizeDemo = () => {
  return (
    <div>
      <div className="button" onClick={capitalizeDemo}>
        capitalize - 首字母大写其余小写
      </div>
      <div className="button" onClick={upperFirstDemo}>
        upperFirst / lowerFirst
      </div>
    </div>
  )
}

export default CapitalizeDemo
