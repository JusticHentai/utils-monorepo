import '../../.css/index.css'
import everyDemo from './everyDemo'
import someDemo from './someDemo'

const EveryDemo = () => {
  return (
    <div>
      <div className="button" onClick={everyDemo}>
        every - 全部满足
      </div>
      <div className="button" onClick={someDemo}>
        some - 任一满足
      </div>
    </div>
  )
}

export default EveryDemo
