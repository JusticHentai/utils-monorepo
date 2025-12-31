import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const maxProfitDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('买卖股票的最佳时机')(res)
        }}
      >
        买卖股票的最佳时机
      </div>
    </div>
  )
}

export default maxProfitDemo
