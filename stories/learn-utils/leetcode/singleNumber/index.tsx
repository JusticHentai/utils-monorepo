import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const singleNumberDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('只出现一次的数字')(res)
        }}
      >
        只出现一次的数字
      </div>
    </div>
  )
}

export default singleNumberDemo
