import '../../.css/index.css'
import afterDemo from './afterDemo'
import edgeCaseDemo from './edgeCaseDemo'

const AfterDemo = () => {
  return (
    <div>
      <div className="button" onClick={afterDemo}>
        after(3, fn) - 多次点击观察
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default AfterDemo
