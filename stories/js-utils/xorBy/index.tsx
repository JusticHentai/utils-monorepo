import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import xorByDemo from './xorByDemo'

const XorByDemo = () => {
  return (
    <div>
      <div className="button" onClick={xorByDemo}>
        类似于 xor，但可以指定迭代器
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default XorByDemo
