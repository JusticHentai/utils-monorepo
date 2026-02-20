import '../../.css/index.css'
import basicDemo from './basicDemo'
import networkInfoDemo from './networkInfoDemo'
import memoryInfoDemo from './memoryInfoDemo'

const GetPageInfoDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        获取基础页面信息
      </div>
      <div className="button" onClick={networkInfoDemo}>
        获取网络信息
      </div>
      <div className="button" onClick={memoryInfoDemo}>
        获取内存信息
      </div>
    </div>
  )
}

export default GetPageInfoDemo
