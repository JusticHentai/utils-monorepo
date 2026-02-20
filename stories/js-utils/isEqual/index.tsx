import '../../.css/index.css'
import basicDemo from './basicDemo'
import objectDemo from './objectDemo'

const IsEqualDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        基础比较
      </div>
      <div className="button" onClick={objectDemo}>
        深度对象比较
      </div>
    </div>
  )
}

export default IsEqualDemo
