import '../../.css/index.css'
import basicDemo from './basicDemo'
import inheritanceDemo from './inheritanceDemo'

const CreateDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        create - 基础继承
      </div>
      <div className="button" onClick={inheritanceDemo}>
        经典继承模式
      </div>
    </div>
  )
}

export default CreateDemo
