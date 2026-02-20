import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import basicDemo from './basicDemo'

const IdentityDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        返回自身
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default IdentityDemo
