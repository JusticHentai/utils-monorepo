import '../../.css/index.css'
import functionDemo from './functionDemo'
import propertyDemo from './propertyDemo'

const GroupByDemo = () => {
  return (
    <div>
      <div className="button" onClick={functionDemo}>
        按函数分组
      </div>
      <div className="button" onClick={propertyDemo}>
        按属性分组
      </div>
    </div>
  )
}

export default GroupByDemo
