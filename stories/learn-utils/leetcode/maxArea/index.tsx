import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const maxAreaDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('盛最多水的容器')(res)
        }}
      >
        盛最多水的容器
      </div>
    </div>
  )
}

export default maxAreaDemo
