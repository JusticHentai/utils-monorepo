import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import dropWhileDemo from './dropWhileDemo'

const DropWhileDemo = () => {
  return (
    <div>
      <div className="button" onClick={dropWhileDemo}>
        创建一个切片数组，去除数组中从起点开始到谓词函数返回假值结束的元素
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default DropWhileDemo
