import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import overEveryDemo from './overEveryDemo'

const OverEveryDemo = () => {
  return (
    <div>
      <div className="button" onClick={overEveryDemo}>
        创建一个函数，检查所有断言函数是否都对给定参数返回 true
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default OverEveryDemo
