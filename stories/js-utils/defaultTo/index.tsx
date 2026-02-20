import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import basicDemo from './basicDemo'

const DefaultToDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        defaultTo - 提供默认值
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default DefaultToDemo
