import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const addTwoNumbersDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('两数相加')(res)
        }}
      >
        两数相加 342 + 465
      </div>
    </div>
  )
}

export default addTwoNumbersDemo
