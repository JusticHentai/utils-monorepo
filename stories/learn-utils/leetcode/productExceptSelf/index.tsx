import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const productExceptSelfDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('除自身以外数组的乘积')(res)
        }}
      >
        除自身以外数组的乘积
      </div>
    </div>
  )
}

export default productExceptSelfDemo
