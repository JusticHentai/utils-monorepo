import { action } from 'storybook/actions'
import formatDateByLocale from '../../../packages/js-utils/src/formatDateByLocale'

const zhCNDemo = () => {
  const now = Date.now()
  // 使用中文地区格式，上海时区
  const result = formatDateByLocale({
    ts: now,
    locale: 'zh-CN',
    timeZone: 'Asia/Shanghai',
  })

  action('中文格式 + 上海时区')(result)
}

export default zhCNDemo
