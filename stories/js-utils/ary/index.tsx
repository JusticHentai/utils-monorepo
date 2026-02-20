import '../../.css/index.css'
import aryDemo from './aryDemo'
import defaultAndNestedDemo from './defaultAndNestedDemo'

const AryDemo = () => {
  return (
    <div>
      <div className="button" onClick={aryDemo}>
        ary - 限制参数数量
      </div>
      <div className="button" onClick={defaultAndNestedDemo}>
        默认值与嵌套用法
      </div>
    </div>
  )
}

export default AryDemo
