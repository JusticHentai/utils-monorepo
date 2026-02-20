import { action } from 'storybook/actions'
import Reporter from '../../../packages/element-utils/src/Reporter'
import { REPORT_METHOD, REPORT_TYPE } from '../../../packages/element-utils/src/Reporter/interface'

let reporter: Reporter | null = null

export const createInitDemo = (
  getReporter: () => Reporter | null,
  setReporter: (r: Reporter | null) => void
) => {
  return () => {
    if (getReporter()) {
      action('已初始化')('Reporter 实例已存在，请先销毁')
      return
    }

    reporter = new Reporter({
      reportUrl: '/api/report',
      appId: 'storybook-demo',
      reportMethod: REPORT_METHOD.BEACON,
      batchSize: 3,
      reportInterval: 3000,
      beforeReport: (data) => {
        action('beforeReport 钩子触发')(data)
        return data
      },
      afterReport: (data, success) => {
        action('afterReport 钩子触发')({ data, success })
      },
    })

    setReporter(reporter)
    action('初始化成功')({
      sessionId: reporter.sessionId,
      pageId: reporter.pageId,
      reportUrl: '/api/report',
      reportMethod: REPORT_METHOD.BEACON,
      batchSize: 3,
      reportInterval: 3000,
    })
  }
}
