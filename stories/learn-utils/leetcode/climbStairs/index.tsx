import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const climbStairsDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('爬楼梯')(res)
        }}
      >
        爬楼梯测试
      </div>
    </div>
  )
}

export default climbStairsDemo
