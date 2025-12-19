import { action } from 'storybook/actions'
import '../../.css/index.css'
import emptyDemo from './emptyDemo'
import notEmptyDemo from './notEmptyDemo'
import notObjectDemo from './notObjectDemo'

const isEmptyObjectDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = emptyDemo()

          action('检测空对象 {}')(res)
        }}
      >
        检测空对象 {}
      </div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = notEmptyDemo()

          action('检测非空对象 { a: 1 }')(res)
        }}
      >
        检测非空对象 {`{ a: 1 }`}
      </div>
      <div
        className="storybook-button"
        onClick={() => {
          const res = notObjectDemo()

          action('检测数组 []')(res)
        }}
      >
        检测数组 []
      </div>
    </div>
  )
}

export default isEmptyObjectDemo
