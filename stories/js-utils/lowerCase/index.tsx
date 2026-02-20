import '../../.css/index.css'
import lowerCaseDemo from './lowerCaseDemo'
import startCaseDemo from './startCaseDemo'

const LowerCaseDemo = () => {
  return (
    <div>
      <div className="button" onClick={lowerCaseDemo}>
        lowerCase / upperCase
      </div>
      <div className="button" onClick={startCaseDemo}>
        startCase / toLower / toUpper
      </div>
    </div>
  )
}

export default LowerCaseDemo
