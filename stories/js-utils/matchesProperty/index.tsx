import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import matchesPropertyDemo from './matchesPropertyDemo'

const MatchesPropertyDemo = () => {
  return (
    <div>
      <div className="button" onClick={matchesPropertyDemo}>
        属性匹配
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default MatchesPropertyDemo
