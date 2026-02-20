import { action } from 'storybook/actions'
import formatDateByLocale from '../../../packages/js-utils/src/formatDateByLocale'

const enUSDemo = () => {
  const now = Date.now()
  // 使用英文地区格式，纽约时区
  const result = formatDateByLocale({
    ts: now,
    locale: 'en-US',
    timeZone: 'America/New_York',
  })

  action('英文格式 + 纽约时区')(result)
}

export default enUSDemo
