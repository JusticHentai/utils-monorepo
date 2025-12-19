import { action } from 'storybook/actions'
import '../../.css/index.css'
import normalDemo from './normalDemo'
import shortDemo from './shortDemo'

const truncateDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()

          action('截断长字符串')(res)
        }}
      >
        截断长字符串
      </div>
      <div
        className="storybook-button"
        onClick={() => {
          const res = shortDemo()

          action('短字符串不截断')(res)
        }}
      >
        短字符串不截断
      </div>
    </div>
  )
}

export default truncateDemo
