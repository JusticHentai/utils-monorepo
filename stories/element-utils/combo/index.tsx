import '../../.css/index.css'
import basicDemo from './basicDemo'

const ComboDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        点击连击（1秒内连续点击）
      </div>
    </div>
  )
}

export default ComboDemo
