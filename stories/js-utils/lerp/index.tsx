import { action } from 'storybook/actions'
import '../../.css/index.css'
import normalDemo from './normalDemo'
import zeroDemo from './zeroDemo'
import oneDemo from './oneDemo'

const lerpDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()

          action('线性插值 1 和 5 之间 0.5 位置')(res)
        }}
      >
        线性插值 1 和 5 之间 0.5 位置
      </div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = zeroDemo()

          action('线性插值 n=0 返回低点')(res)
        }}
      >
        线性插值 n=0 返回低点
      </div>
      <div
        className="storybook-button"
        onClick={() => {
          const res = oneDemo()

          action('线性插值 n=1 返回高点')(res)
        }}
      >
        线性插值 n=1 返回高点
      </div>
    </div>
  )
}

export default lerpDemo
