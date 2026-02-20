import '../../.css/index.css'
import xorDemo from './xorDemo'
import xorByDemo from './xorByDemo'

const XorDemo = () => {
  return (
    <div>
      <div className="button" onClick={xorDemo}>
        xor 对称差集
      </div>
      <div className="button" onClick={xorByDemo}>
        xorBy / xorWith
      </div>
    </div>
  )
}

export default XorDemo
