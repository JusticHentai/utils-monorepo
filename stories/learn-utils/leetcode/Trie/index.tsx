import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const TrieDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('前缀树')(res)
        }}
      >
        前缀树测试
      </div>
    </div>
  )
}

export default TrieDemo
