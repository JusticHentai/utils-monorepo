import { action } from 'storybook/actions'
import '../../.css/index.css'
import normalDemo from './normalDemo'

const walkDemo = () => {
  return (
    <div>
      <div
        className="storybook-button"
        onClick={async () => {
          const res = await normalDemo()

          action('遍历对象并处理值')(res)
        }}
      >
        遍历对象并处理值
      </div>
    </div>
  )
}

export default walkDemo
