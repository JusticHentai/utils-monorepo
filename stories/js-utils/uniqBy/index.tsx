import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import uniqByDemo from './uniqByDemo'

const UniqByDemo = () => {
  return (
    <div>
      <div className="button" onClick={uniqByDemo}>
        根据迭代器返回值去重
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default UniqByDemo
