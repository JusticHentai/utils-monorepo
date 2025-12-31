import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const mapDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('map 映射数组')(res)
        }}
      >
        map 映射测试
      </div>
    </div>
  )
}

export default mapDemo
