import '../../.css/index.css'
import basicDemo from './basicDemo'
import maxLinesDemo from './maxLinesDemo'
import emptyStackDemo from './emptyStackDemo'

const FormatStackDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        基础格式化
      </div>
      <div className="button" onClick={maxLinesDemo}>
        限制最大行数
      </div>
      <div className="button" onClick={emptyStackDemo}>
        处理空堆栈
      </div>
    </div>
  )
}

export default FormatStackDemo
