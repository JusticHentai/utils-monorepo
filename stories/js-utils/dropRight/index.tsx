import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import dropRightDemo from './dropRightDemo'

const DropRightDemo = () => {
  return (
    <div>
      <div className="button" onClick={dropRightDemo}>
        创建一个切片数组，去除数组末尾的 n 个元素
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default DropRightDemo
