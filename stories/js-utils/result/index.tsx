import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import resultDemo from './resultDemo'

const ResultDemo = () => {
  return (
    <div>
      <div className="button" onClick={resultDemo}>
        路径解析
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default ResultDemo
