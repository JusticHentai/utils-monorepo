import '../../.css/index.css'
import basicDemo from './basicDemo'
import createDemo from './createDemo'

const SetDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        基础路径设置
      </div>
      <div className="button" onClick={createDemo}>
        自动创建路径
      </div>
    </div>
  )
}

export default SetDemo
