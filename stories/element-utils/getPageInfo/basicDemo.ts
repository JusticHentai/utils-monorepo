import { action } from 'storybook/actions'
import getPageInfo from '../../../packages/element-utils/src/getPageInfo'

const basicDemo = () => {
  const pageInfo = getPageInfo()

  // 基础信息
  action('页面基础信息')({
    url: pageInfo.url,
    title: pageInfo.title,
    referrer: pageInfo.referrer,
  })

  // 设备信息
  action('设备信息')({
    userAgent: pageInfo.userAgent,
    platform: pageInfo.platform,
    language: pageInfo.language,
    timezone: pageInfo.timezone,
  })

  // 屏幕信息
  action('屏幕信息')({
    screenResolution: pageInfo.screenResolution,
    viewport: pageInfo.viewport,
    devicePixelRatio: pageInfo.devicePixelRatio,
  })
}

export default basicDemo
