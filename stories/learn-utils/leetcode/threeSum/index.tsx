import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const threeSumDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('三数之和')(res)
        }}
      >
        三数之和 [-1,0,1,2,-1,-4]
      </div>
    </div>
  )
}

export default threeSumDemo
