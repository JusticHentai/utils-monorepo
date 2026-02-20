import '../../.css/index.css'
import basicDemo from './basicDemo'
import builtinTypesDemo from './builtinTypesDemo'
import typeofCompareDemo from './typeofCompareDemo'

const GetTagDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        基础类型检测
      </div>
      <div className="button" onClick={builtinTypesDemo}>
        内置对象类型
      </div>
      <div className="button" onClick={typeofCompareDemo}>
        对比 typeof 的局限
      </div>
    </div>
  )
}

export default GetTagDemo
