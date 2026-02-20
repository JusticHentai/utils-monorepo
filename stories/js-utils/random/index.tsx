import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import randomDemo from './randomDemo'

const RandomDemo = () => {
  return (
    <div>
      <div className="button" onClick={randomDemo}>
        生成随机数
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default RandomDemo