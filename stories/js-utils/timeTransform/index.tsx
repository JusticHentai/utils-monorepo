import { action } from 'storybook/actions'
import '../../.css/index.css'
import normalDemo from './normalDemo'

const timeTransformDemo = () => {
  return (
    <div>
      <div
        className="storybook-button"
        onClick={() => {
          const res = normalDemo()

          action('格式化时间戳')(res)
        }}
      >
        格式化时间戳
      </div>
    </div>
  )
}

export default timeTransformDemo
