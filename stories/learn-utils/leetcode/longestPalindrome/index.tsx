import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const longestPalindromeDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('最长回文子串')(res)
        }}
      >
        最长回文子串
      </div>
    </div>
  )
}

export default longestPalindromeDemo
