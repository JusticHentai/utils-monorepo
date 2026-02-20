import '../../.css/index.css'
import basicDemo from './basicDemo'
import notChildDemo from './notChildDemo'

const IsElementChildrenDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        判断是子元素
      </div>
      <div className="button" onClick={notChildDemo}>
        判断不是子元素
      </div>
    </div>
  )
}

export default IsElementChildrenDemo
