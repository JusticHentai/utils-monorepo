import { action } from 'storybook/actions'
import '../../.css/index.css'
import borderDemo from './borderDemo'
import maxDemo from './maxDemo'
import minDemo from './minDemo'
import normalDemo from './normalDemo'

const clampDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = maxDemo()

          action('value 110 限制在 0 100 之间')(res)
        }}
      >
        value 110 限制在 0 100 之间
      </div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = minDemo()

          action('value -10 限制在 0 100 之间')(res)
        }}
      >
        value -10 限制在 0 100 之间
      </div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()

          action('value 50 限制在 0 100 之间')(res)
        }}
      >
        value 50 限制在 0 100 之间
      </div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = borderDemo()

          action('value 10 限制在 0 0 之间')(res)
        }}
      >
        value 10 限制在 0 0 之间
      </div>
    </div>
  )
}

export default clampDemo
