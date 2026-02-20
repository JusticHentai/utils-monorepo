import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import minByDemo from './minByDemo'

const MinByDemo = () => {
  return (
    <div>
      <div className="button" onClick={minByDemo}>
        类似于 min，但可以指定迭代器
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default MinByDemo
