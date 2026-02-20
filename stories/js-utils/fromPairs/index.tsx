import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import basicDemo from './basicDemo'

const FromPairsDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        将键值对转为对象
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default FromPairsDemo
