import { action } from 'storybook/actions'
import type Reporter from '../../../packages/element-utils/src/Reporter'

export const createFlushDemo = (getReporter: () => Reporter | null) => {
  return () => {
    const reporter = getReporter()
    if (!reporter) {
      action('未初始化')('请先点击「初始化 Reporter」')
      return
    }

    reporter.flush()
    action('flush 完成')('已将缓存中的数据立即上报')
  }
}
