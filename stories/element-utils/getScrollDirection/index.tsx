import '../../.css/index.css'
import basicDemo from './basicDemo'
import scrollContainerDemo from './scrollContainerDemo'

const GetScrollDirectionDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        基础用法
      </div>
      <div className="button" onClick={scrollContainerDemo}>
        滚动容器方向检测
      </div>
    </div>
  )
}

export default GetScrollDirectionDemo
