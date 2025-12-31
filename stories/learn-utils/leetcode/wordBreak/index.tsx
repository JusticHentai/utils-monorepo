import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const wordBreakDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('单词拆分')(res)
        }}
      >
        单词拆分测试
      </div>
    </div>
  )
}

export default wordBreakDemo
