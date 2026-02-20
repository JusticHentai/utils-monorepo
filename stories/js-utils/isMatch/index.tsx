import '../../.css/index.css'
import isMatchDemo from './isMatchDemo'
import matchesDemo from './matchesDemo'

const IsMatchDemo = () => {
  return (
    <div>
      <div className="button" onClick={isMatchDemo}>
        基础匹配
      </div>
      <div className="button" onClick={matchesDemo}>
        matches 谓词
      </div>
    </div>
  )
}

export default IsMatchDemo
