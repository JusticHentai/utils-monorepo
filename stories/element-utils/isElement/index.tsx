import '../../.css/index.css'
import basicDemo from './basicDemo'
import falseDemo from './falseDemo'

const IsElementDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        检测 DOM 元素
      </div>
      <div className="button" onClick={falseDemo}>
        检测非 Element 类型
      </div>
    </div>
  )
}

export default IsElementDemo
