import '../../.css/index.css'
import { runBasicDemo } from './basicDemo'
import { runBatchDemo } from './batchDemo'
import { runJsonDemo } from './jsonDemo'
import { runTypescriptDemo } from './typescriptDemo'

const FormatCodeDemo = () => {
  return (
    <div>
      <div className="button" onClick={runBasicDemo}>
        格式化 JavaScript 代码
      </div>
      <div className="button" onClick={runTypescriptDemo}>
        格式化 TypeScript 代码
      </div>
      <div className="button" onClick={runJsonDemo}>
        格式化 JSON 代码
      </div>
      <div className="button" onClick={runBatchDemo}>
        批量格式化代码
      </div>
    </div>
  )
}

export default FormatCodeDemo
