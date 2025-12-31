import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const mergeDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('合并区间')(res)
        }}
      >
        合并区间测试
      </div>
    </div>
  )
}

export default mergeDemo
