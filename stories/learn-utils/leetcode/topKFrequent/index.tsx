import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const topKFrequentDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('前K个高频元素')(res)
        }}
      >
        前K个高频元素
      </div>
    </div>
  )
}

export default topKFrequentDemo
