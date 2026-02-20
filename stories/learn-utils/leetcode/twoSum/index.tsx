import { action } from 'storybook/actions'
import '../../../.css/index.css'
import anotherDemo from './anotherDemo'
import normalDemo from './normalDemo'

const twoSumDemo = () => {
  return (
    <div>
      <div
        className="button"
        onClick={() => {
          const res = anotherDemo()
          action('another')(res)
        }}
      >
        another
      </div>
      <div
        className="button"
        onClick={() => {
          const res = normalDemo()
          action('normal')(res)
        }}
      >
        normal
      </div>
    </div>
  )
}

export default twoSumDemo
