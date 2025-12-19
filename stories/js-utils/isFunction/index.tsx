import { action } from 'storybook/actions'
import '../../.css/index.css'
import functionDemo from './functionDemo'
import notFunctionDemo from './notFunctionDemo'

const isFunctionDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = functionDemo()

          action('检测函数 () => {}')(res)
        }}
      >
        检测函数 () =&gt; {}
      </div>
      <div
        className="storybook-button"
        onClick={() => {
          const res = notFunctionDemo()

          action('检测对象 { a: 1 }')(res)
        }}
      >
        检测对象 {`{ a: 1 }`}
      </div>
    </div>
  )
}

export default isFunctionDemo
