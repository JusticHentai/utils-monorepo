import '../../.css/index.css'
import errorDemo from './errorDemo'
import successDemo from './successDemo'

import { action } from 'storybook/actions'

const AwaitFormatDemo = () => {
  return (
    <>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          successDemo().then((res) => {
            action('请求成功用例')(res)
          })
        }}
      >
        请求成功用例
      </div>
      <div
        className="storybook-button"
        onClick={() => {
          errorDemo().then((res) => {
            action('请求失败用例')(res)
          })
        }}
      >
        请求失败用例
      </div>
    </>
  )
}

export default AwaitFormatDemo
