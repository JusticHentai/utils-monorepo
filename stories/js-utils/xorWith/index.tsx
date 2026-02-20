import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import xorWithDemo from './xorWithDemo'

const XorWithDemo = () => {
  return (
    <div>
      <div className="button" onClick={xorWithDemo}>
        类似于 xor，但可以指定比较器
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default XorWithDemo
