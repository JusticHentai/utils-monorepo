import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const subsetsDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('子集')(res)
        }}
      >
        子集 [1,2,3]
      </div>
    </div>
  )
}

export default subsetsDemo
