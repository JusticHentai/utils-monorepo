import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import matchesDemo from './matchesDemo'

const MatchesDemo = () => {
  return (
    <div>
      <div className="button" onClick={matchesDemo}>
        创建一个函数，用于检查对象是否匹配给定的源对象
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default MatchesDemo
