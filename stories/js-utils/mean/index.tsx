import '../../.css/index.css'
import meanDemo from './meanDemo'
import meanByDemo from './meanByDemo'

const MeanDemo = () => {
  return (
    <div>
      <div className="button" onClick={meanDemo}>
        计算平均值
      </div>
      <div className="button" onClick={meanByDemo}>
        meanBy 计算
      </div>
    </div>
  )
}

export default MeanDemo
