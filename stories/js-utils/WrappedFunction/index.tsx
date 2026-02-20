import '../../.css/index.css'
import basicDemo from './basicDemo'
import compositionDemo from './compositionDemo'

const wrappedFunctionDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        基础包装函数演示
      </div>
      <div className="button" onClick={compositionDemo}>
        函数组合演示
      </div>
    </div>
  )
}

export default wrappedFunctionDemo
