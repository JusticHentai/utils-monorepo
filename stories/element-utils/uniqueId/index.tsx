import '../../.css/index.css'
import generateDemo from './generateDemo'

const UniqueIdDemo = () => {
  return (
    <div>
      <div className="button" onClick={generateDemo}>
        生成唯一ID
      </div>
    </div>
  )
}

export default UniqueIdDemo
