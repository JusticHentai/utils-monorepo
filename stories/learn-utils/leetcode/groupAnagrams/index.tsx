import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const groupAnagramsDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('字母异位词分组')(res)
        }}
      >
        字母异位词分组
      </div>
    </div>
  )
}

export default groupAnagramsDemo
