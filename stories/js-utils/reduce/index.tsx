import '../../.css/index.css'
import reduceDemo from './reduceDemo'
import reduceRightDemo from './reduceRightDemo'

const ReduceDemo = () => {
  return (
    <div>
      <div className="button" onClick={reduceDemo}>
        reduce 累积
      </div>
      <div className="button" onClick={reduceRightDemo}>
        reduceRight
      </div>
    </div>
  )
}

export default ReduceDemo
