import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const combinationSumDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('组合总和')(res)
        }}
      >
        组合总和测试
      </div>
    </div>
  )
}

export default combinationSumDemo
