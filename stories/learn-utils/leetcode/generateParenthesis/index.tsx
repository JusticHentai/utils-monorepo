import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const generateParenthesisDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('括号生成')(res)
        }}
      >
        括号生成 n=3
      </div>
    </div>
  )
}

export default generateParenthesisDemo
