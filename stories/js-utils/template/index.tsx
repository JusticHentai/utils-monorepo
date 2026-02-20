import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import templateDemo from './templateDemo'

const TemplateDemo = () => {
  return (
    <div>
      <div className="button" onClick={templateDemo}>
        模板编译
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default TemplateDemo
