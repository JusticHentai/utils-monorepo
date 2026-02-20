import { action } from 'storybook/actions'
import '../../../.css/index.css'
import circularDemo from './circularDemo'
import normalDemo from './normalDemo'

const deepCloneDemo = () => {
  return (
    <div>
      <div
        className="button"
        onClick={() => {
          const res = circularDemo()
          action('circular')(res)
        }}
      >
        circular
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

export default deepCloneDemo
