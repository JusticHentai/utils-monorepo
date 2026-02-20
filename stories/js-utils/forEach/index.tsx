import '../../.css/index.css'
import forEachDemo from './forEachDemo'
import forEachRightDemo from './forEachRightDemo'

const ForEachDemo = () => {
  return (
    <div>
      <div className="button" onClick={forEachDemo}>
        forEach - 遍历集合
      </div>
      <div className="button" onClick={forEachRightDemo}>
        forEachRight - 从右遍历
      </div>
    </div>
  )
}

export default ForEachDemo
