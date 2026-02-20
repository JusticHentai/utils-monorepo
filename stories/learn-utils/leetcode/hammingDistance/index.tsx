import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const hammingDistanceDemo = () => {
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

export default hammingDistanceDemo
