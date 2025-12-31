import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const letterCombinationsDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('电话号码的字母组合')(res)
        }}
      >
        电话号码字母组合 "23"
      </div>
    </div>
  )
}

export default letterCombinationsDemo
