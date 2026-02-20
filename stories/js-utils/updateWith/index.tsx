import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import updateWithDemo from './updateWithDemo'

const UpdateWithDemo = () => {
  return (
    <div>
      <div className="button" onClick={updateWithDemo}>
        类似于 update，但可以自定义路径上创建的值
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default UpdateWithDemo
