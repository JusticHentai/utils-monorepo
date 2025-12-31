import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const lengthOfLongestSubstringDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('无重复字符的最长子串')(res)
        }}
      >
        无重复字符的最长子串测试
      </div>
    </div>
  )
}

export default lengthOfLongestSubstringDemo
