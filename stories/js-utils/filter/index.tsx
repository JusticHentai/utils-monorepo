import '../../.css/index.css'
import filterDemo from './filterDemo'
import rejectDemo from './rejectDemo'

const FilterDemo = () => {
  return (
    <div>
      <div className="button" onClick={filterDemo}>
        filter - 过滤满足条件的
      </div>
      <div className="button" onClick={rejectDemo}>
        reject - 排除满足条件的
      </div>
    </div>
  )
}

export default FilterDemo
