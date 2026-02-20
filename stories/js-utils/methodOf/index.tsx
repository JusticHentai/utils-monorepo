import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import methodOfDemo from './methodOfDemo'

const MethodOfDemo = () => {
  return (
    <div>
      <div className="button" onClick={methodOfDemo}>
        创建一个函数，在给定对象上调用指定路径的方法
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default MethodOfDemo
