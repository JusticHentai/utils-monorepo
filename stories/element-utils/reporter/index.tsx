import '../../.css/index.css'
import type Reporter from '../../../packages/element-utils/src/reporter'
import { createInitDemo } from './initDemo'
import { createReportDemo } from './reportDemo'
import { createFlushDemo } from './flushDemo'
import { createUpdatePageInfoDemo } from './updatePageInfoDemo'

let reporter: Reporter | null = null

const initDemo = createInitDemo(
  () => reporter,
  (r) => {
    reporter = r
  }
)
const reportDemo = createReportDemo(() => reporter)
const flushDemo = createFlushDemo(() => reporter)
const updatePageInfoDemo = createUpdatePageInfoDemo(() => reporter)

const ReporterDemo = () => {
  return (
    <div>
      <div className="button" onClick={initDemo}>
        初始化 Reporter
      </div>
      <div className="button" onClick={reportDemo}>
        上报数据
      </div>
      <div className="button" onClick={flushDemo}>
        手动 Flush
      </div>
      <div className="button" onClick={updatePageInfoDemo}>
        更新页面信息
      </div>
    </div>
  )
}

export default ReporterDemo
