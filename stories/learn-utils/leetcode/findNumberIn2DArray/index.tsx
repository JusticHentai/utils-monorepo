import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const findNumberIn2DArrayDemo = () => {
  return (
    <div>
      <div
        className="button"
        onClick={() => {
          const res = normalDemo()
          action('normal')(res)
        }}
      >
        normal
      </div>
    </div>
  )
}

export default findNumberIn2DArrayDemo
