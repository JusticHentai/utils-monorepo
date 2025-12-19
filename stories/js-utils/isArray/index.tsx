import { action } from 'storybook/actions'
import '../../.css/index.css'
import arrayDemo from './arrayDemo'
import notArrayDemo from './notArrayDemo'

const isArrayDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = arrayDemo()

          action('检测数组 [1, 2, 3]')(res)
        }}
      >
        检测数组 [1, 2, 3]
      </div>
      <div
        className="storybook-button"
        onClick={() => {
          const res = notArrayDemo()

          action('检测对象 { a: 1 }')(res)
        }}
      >
        检测对象 {`{ a: 1 }`}
      </div>
    </div>
  )
}

export default isArrayDemo
