import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import iterateeDemo from './iterateeDemo'

const IterateeDemo = () => {
  return (
    <div>
      <div className="button" onClick={iterateeDemo}>
        创建一个函数，返回给定参数的迭代器
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default IterateeDemo
