import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'
import anotherDemo from './anotherDemo'

const twoSumDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('两数之和 示例1')(res)
        }}
      >
        两数之和 [2,7,11,15] target=9
      </div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = anotherDemo()
          action('两数之和 示例2')(res)
        }}
      >
        两数之和 [3,2,4] target=6
      </div>
    </div>
  )
}

export default twoSumDemo
