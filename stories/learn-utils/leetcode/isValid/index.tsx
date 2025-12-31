import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const isValidDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('有效的括号')(res)
        }}
      >
        有效的括号测试
      </div>
    </div>
  )
}

export default isValidDemo
