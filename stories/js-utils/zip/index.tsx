import '../../.css/index.css'
import zipDemo from './zipDemo'
import zipObjectDemo from './zipObjectDemo'

const ZipDemo = () => {
  return (
    <div>
      <div className="button" onClick={zipDemo}>
        zip 分组
      </div>
      <div className="button" onClick={zipObjectDemo}>
        zipObject / zipWith
      </div>
    </div>
  )
}

export default ZipDemo
