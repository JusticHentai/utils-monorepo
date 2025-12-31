import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'
import errorDemo from './errorDemo'

const MyPromiseAllDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={async () => {
          const res = await normalDemo()
          action('Promise.all 全部成功')(res)
        }}
      >
        Promise.all 全部成功
      </div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={async () => {
          const res = await errorDemo()
          action('Promise.all 有失败')(res)
        }}
      >
        Promise.all 有失败
      </div>
    </div>
  )
}

export default MyPromiseAllDemo
