import '../../.css/index.css'
import parseUrlDemo from './parseUrlDemo'
import buildUrlDemo from './buildUrlDemo'
import queryParamDemo from './queryParamDemo'
import isValidUrlDemo from './isValidUrlDemo'

const ParseUrlDemo = () => {
  return (
    <div>
      <div className="button" onClick={parseUrlDemo}>
        解析 URL
      </div>
      <div className="button" onClick={buildUrlDemo}>
        构建 URL
      </div>
      <div className="button" onClick={queryParamDemo}>
        查询参数操作
      </div>
      <div className="button" onClick={isValidUrlDemo}>
        验证 URL
      </div>
    </div>
  )
}

export default ParseUrlDemo
