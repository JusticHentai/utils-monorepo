import { action } from 'storybook/actions'
import '../../.css/index.css'
import normalDemo from './normalDemo'

const pickDemo = () => {
  return (
    <div>
      <div
        className="storybook-button"
        onClick={() => {
          const res = normalDemo()

          action('提取指定 key')(res)
        }}
      >
        提取指定 key
      </div>
    </div>
  )
}

export default pickDemo
