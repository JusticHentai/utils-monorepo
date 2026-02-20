import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'
import rejectDemo from './rejectDemo'

const MyPromiseDemo = () => {
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
      <div
        className="button"
        onClick={() => {
          const res = rejectDemo()
          action('reject')(res)
        }}
      >
        reject
      </div>
    </div>
  )
}

export default MyPromiseDemo
