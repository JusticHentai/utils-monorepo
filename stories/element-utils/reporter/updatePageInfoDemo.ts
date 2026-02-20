import { action } from 'storybook/actions'
import type Reporter from '../../../packages/element-utils/src/Reporter'

export const createUpdatePageInfoDemo = (
  getReporter: () => Reporter | null
) => {
  return () => {
    const reporter = getReporter()
    if (!reporter) {
      action('未初始化')('请先点击「初始化 Reporter」')
      return
    }

    const oldPageId = reporter.pageId
    reporter.updatePageInfo()
    const newPageId = reporter.pageId

    action('更新页面信息')({
      oldPageId,
      newPageId,
    })
  }
}
