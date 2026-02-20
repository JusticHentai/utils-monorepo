import createBatch from '@justichentai/js-utils/createBatch'

import getPageInfo from '../getPageInfo'
import isBrowser from '../isBrowser'
import onPageUnload from '../onPageUnload'
import sessionId from '../sessionId'
import uniqueId from '../uniqueId'
import visibility from '../visibility'
import sendByBeacon from './core/sendByBeacon'
import sendByFetch from './core/sendByFetch'
import sendByImage from './core/sendByImage'
import sendByXHR from './core/sendByXHR'
import type { ReportData, ReporterOptions } from './interface'
import { REPORT_METHOD, REPORT_TYPE } from './interface'

/**
 * 数据上报器
 */
export default class Reporter {
  /** 会话 ID */
  sessionId: string
  /** 页面 ID */
  pageId: string
  /** 上报配置 */
  private options: Required<
    Pick<ReporterOptions, 'reportUrl' | 'reportMethod'>
  > &
    ReporterOptions
  /** 批次处理器 */
  private batch: ReturnType<typeof createBatch<ReportData>>

  constructor(options: ReporterOptions) {
    const {
      reportMethod = REPORT_METHOD.BEACON,
      batchSize = 10,
      reportInterval = 5000,
    } = options

    this.options = { ...options, reportMethod }
    this.sessionId = sessionId()
    this.pageId = uniqueId()

    // 使用 createBatch 管理批量上报
    this.batch = createBatch<ReportData>((items) => this.send(items), {
      batchSize,
      batchDelay: reportInterval,
    })

    // 注册页面生命周期事件
    this.bindLifecycle()
  }

  /**
   * 上报数据
   * @param type - 数据类型
   * @param data - 具体数据
   * @param immediate - 是否立即上报，默认值：false
   */
  report = (type: REPORT_TYPE, data: unknown, immediate = false) => {
    const reportData: ReportData = {
      type,
      appId: this.options.appId,
      sessionId: this.sessionId,
      pageId: this.pageId,
      timestamp: Date.now(),
      pageInfo: getPageInfo(),
      data,
    }

    if (immediate) {
      this.send([reportData])
      return
    }

    this.batch.add([reportData])
  }

  /**
   * 刷新缓存，立即上报所有暂存数据
   */
  flush = () => {
    this.batch.flush()
  }

  /**
   * 更新页面信息（用于 SPA 路由变化）
   */
  updatePageInfo = () => {
    this.pageId = uniqueId()
  }

  /**
   * 发送数据（含前置/后置钩子处理）
   */
  private send = async (data: ReportData[]) => {
    const { reportUrl, reportMethod, beforeReport, afterReport } = this.options

    // 上报前过一遍 beforeReport 的过滤处理
    const processedData = data
      .map((item) => {
        if (!beforeReport) return item
        const result = beforeReport(item)
        return result === false ? null : result
      })
      .filter((item): item is ReportData => item !== null)

    if (processedData.length === 0) return

    let success = false

    if (reportMethod === REPORT_METHOD.BEACON)
      success = await sendByBeacon(reportUrl, processedData)
    if (reportMethod === REPORT_METHOD.FETCH)
      success = await sendByFetch(reportUrl, processedData)
    if (reportMethod === REPORT_METHOD.XHR)
      success = await sendByXHR(reportUrl, processedData)
    if (reportMethod === REPORT_METHOD.IMG)
      success = sendByImage(reportUrl, processedData)

    // 后置处理
    if (afterReport) {
      processedData.forEach((item) => afterReport(item, success))
    }
  }

  /**
   * 绑定页面生命周期事件
   */
  private bindLifecycle = () => {
    if (!isBrowser()) return

    // 页面卸载时紧急发送
    onPageUnload(() => this.batch.flush())

    // 页面隐藏时刷新缓存
    visibility({ hidden: () => this.batch.flush() })
  }
}
