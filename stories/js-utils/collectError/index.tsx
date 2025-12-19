import '../../.css/index.css'
import normalDemo from './normalDemo'

const collectErrorDemo = () => {
  return (
    <div>
      <div
        className="storybook-button"
        onClick={() => {
          normalDemo()
        }}
      >
        初始化错误收集
      </div>
      <div
        className="storybook-button"
        onClick={() => {
          throw new Error('运行时错误')
        }}
      >
        触发运行时错误
      </div>
      <div
        className="storybook-button"
        onClick={() => {
          Promise.reject('Promise 错误')
        }}
      >
        触发 Promise 错误
      </div>
    </div>
  )
}

export default collectErrorDemo
