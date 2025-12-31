import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const MyPromiseRaceDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={async () => {
          const res = await normalDemo()
          action('Promise.race 竞速')(res)
        }}
      >
        Promise.race 竞速测试
      </div>
    </div>
  )
}

export default MyPromiseRaceDemo
