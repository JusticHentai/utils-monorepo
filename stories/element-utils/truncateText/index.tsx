import '../../.css/index.css'
import basicDemo from './basicDemo'
import optionalDemo from './optionalDemo'

const TruncateTextDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        基础硬截断
      </div>
      <div className="button" onClick={optionalDemo}>
        可选值和边界长度
      </div>
    </div>
  )
}

export default TruncateTextDemo
