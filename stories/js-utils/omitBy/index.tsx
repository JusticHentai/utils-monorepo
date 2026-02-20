import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import omitByDemo from './omitByDemo'

const OmitByDemo = () => {
  return (
    <div>
      <div className="button" onClick={omitByDemo}>
        根据断言函数省略属性
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default OmitByDemo
