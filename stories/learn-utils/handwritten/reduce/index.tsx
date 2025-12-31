import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const reduceDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('reduce 归约数组')(res)
        }}
      >
        reduce 归约测试
      </div>
    </div>
  )
}

export default reduceDemo
