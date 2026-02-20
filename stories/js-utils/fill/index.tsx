import '../../.css/index.css'
import basicDemo from './basicDemo'
import rangeDemo from './rangeDemo'

const FillDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        基础填充
      </div>
      <div className="button" onClick={rangeDemo}>
        范围填充
      </div>
    </div>
  )
}

export default FillDemo
