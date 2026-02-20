import '../../.css/index.css'
import basicDemo from './basicDemo'
import dynamicHeightDemo from './dynamicHeightDemo'
import resetDemo from './resetDemo'
import scrollDemo from './scrollDemo'
import scrollToIndexDemo from './scrollToIndexDemo'

const CreateVirtualListDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        基础用法
      </div>
      <div className="button" onClick={scrollDemo}>
        滚动计算
      </div>
      <div className="button" onClick={dynamicHeightDemo}>
        动态高度
      </div>
      <div className="button" onClick={scrollToIndexDemo}>
        滚动到指定索引
      </div>
      <div className="button" onClick={resetDemo}>
        重置测量数据
      </div>
    </div>
  )
}

export default CreateVirtualListDemo
