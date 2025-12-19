import { action } from 'storybook/actions'
import '../../.css/index.css'
import arrayDemo from './arrayDemo'
import normalDemo from './normalDemo'

const deepMergeDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()

          action('深度合并对象')(res)
        }}
      >
        深度合并对象
      </div>
      <div
        className="storybook-button"
        onClick={() => {
          const res = arrayDemo()

          action('深度合并数组')(res)
        }}
      >
        深度合并数组
      </div>
    </div>
  )
}

export default deepMergeDemo
