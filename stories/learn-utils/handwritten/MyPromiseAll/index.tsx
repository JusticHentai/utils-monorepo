import { action } from 'storybook/actions'
import '../../../.css/index.css'
import errorDemo from './errorDemo'
import normalDemo from './normalDemo'

const MyPromiseAllDemo = () => {
  return (
    <div>
      <div
        className="button"
        onClick={() => {
          const res = errorDemo()
          action('error')(res)
        }}
      >
        error
      </div>
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

export default MyPromiseAllDemo
