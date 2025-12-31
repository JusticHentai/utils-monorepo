import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const permuteDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('全排列')(res)
        }}
      >
        全排列 [1,2,3]
      </div>
    </div>
  )
}

export default permuteDemo
