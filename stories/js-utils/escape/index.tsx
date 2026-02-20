import '../../.css/index.css'
import escapeDemo from './escapeDemo'
import escapeRegExpDemo from './escapeRegExpDemo'

const EscapeDemo = () => {
  return (
    <div>
      <div className="button" onClick={escapeDemo}>
        escape / unescape - HTML 转义
      </div>
      <div className="button" onClick={escapeRegExpDemo}>
        escapeRegExp - 正则转义
      </div>
    </div>
  )
}

export default EscapeDemo
