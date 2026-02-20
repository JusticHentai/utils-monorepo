import '../../.css/index.css'
import memoizeDemo from './memoizeDemo'
import memoizeResolverDemo from './memoizeResolverDemo'

const MemoizeDemo = () => {
  return (
    <div>
      <div className="button" onClick={memoizeDemo}>
        基础记忆化
      </div>
      <div className="button" onClick={memoizeResolverDemo}>
        自定义解析器
      </div>
    </div>
  )
}

export default MemoizeDemo
