import { action } from 'storybook/actions'
import type Reporter from '../../../packages/element-utils/src/reporter'
import { REPORT_TYPE } from '../../../packages/element-utils/src/reporter/interface'

export const createReportDemo = (getReporter: () => Reporter | null) => {
  return () => {
    const reporter = getReporter()
    if (!reporter) {
      action('未初始化')('请先点击「初始化 Reporter」')
      return
    }

    reporter.report(REPORT_TYPE.PERFORMANCE, {
      metricType: 'webVitals',
      name: 'LCP',
      value: 1234.5,
    })

    action('上报性能数据')(REPORT_TYPE.PERFORMANCE)

    reporter.report(REPORT_TYPE.ERROR, { message: 'TypeError: xxx is not a function', stack: 'at demo.ts:1:1' }, true)

    action('上报错误数据（立即上报）')(REPORT_TYPE.ERROR)

    reporter.report(REPORT_TYPE.CUSTOM, { event: 'button_click', label: 'demo' })

    action('上报自定义数据')(REPORT_TYPE.CUSTOM)
  }
}
