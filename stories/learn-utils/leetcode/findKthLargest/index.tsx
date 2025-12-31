import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const findKthLargestDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('数组中的第K个最大元素')(res)
        }}
      >
        第K个最大元素
      </div>
    </div>
  )
}

export default findKthLargestDemo
