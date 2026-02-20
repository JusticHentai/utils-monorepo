import '../../.css/index.css'
import basicDemo from './basicDemo'
import navigationTypesDemo from './navigationTypesDemo'

const GetNavigationTypeDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        获取当前导航类型
      </div>
      <div className="button" onClick={navigationTypesDemo}>
        查看所有导航类型
      </div>
    </div>
  )
}

export default GetNavigationTypeDemo
