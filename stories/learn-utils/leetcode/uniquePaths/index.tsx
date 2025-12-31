import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const uniquePathsDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('不同路径')(res)
        }}
      >
        不同路径测试
      </div>
    </div>
  )
}

export default uniquePathsDemo
