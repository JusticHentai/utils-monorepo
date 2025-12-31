import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const flatDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('数组扁平化')(res)
        }}
      >
        数组扁平化测试
      </div>
    </div>
  )
}

export default flatDemo
