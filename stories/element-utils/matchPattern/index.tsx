import '../../.css/index.css'
import regexDemo from './regexDemo'
import stringDemo from './stringDemo'

const MatchPatternDemo = () => {
  return (
    <div>
      <div className="button" onClick={stringDemo}>
        字符串匹配
      </div>
      <div className="button" onClick={regexDemo}>
        正则表达式匹配
      </div>
    </div>
  )
}

export default MatchPatternDemo
