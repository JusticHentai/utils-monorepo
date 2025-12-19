import { action } from 'storybook/actions'
import '../../.css/index.css'
import normalDemo from './normalDemo'

const PointDemo = () => {
  return (
    <div>
      <div
        className="storybook-button"
        onClick={() => {
          const res = normalDemo()

          action('创建 Point 对象')(res)
        }}
      >
        创建 Point 对象
      </div>
    </div>
  )
}

export default PointDemo
