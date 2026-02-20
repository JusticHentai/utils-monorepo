import '../../.css/index.css'
import restDemo from './restDemo'
import spreadDemo from './spreadDemo'

const RestDemo = () => {
  return (
    <div>
      <div className="button" onClick={restDemo}>
        rest 收集参数
      </div>
      <div className="button" onClick={spreadDemo}>
        spread 展开参数
      </div>
    </div>
  )
}

export default RestDemo
