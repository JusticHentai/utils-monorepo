import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const filterDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('filter 过滤数组')(res)
        }}
      >
        filter 过滤测试
      </div>
    </div>
  )
}

export default filterDemo
