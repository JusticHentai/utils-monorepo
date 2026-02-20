import '../../.css/index.css'
import basicDemo from './basicDemo'
import omitByDemo from './omitByDemo'

const OmitDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        omit - 排除指定属性
      </div>
      <div className="button" onClick={omitByDemo}>
        omitBy - 条件排除
      </div>
    </div>
  )
}

export default OmitDemo
