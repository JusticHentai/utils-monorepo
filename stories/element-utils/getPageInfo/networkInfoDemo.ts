import { action } from 'storybook/actions'
import getPageInfo from '../../../packages/element-utils/src/getPageInfo'

const networkInfoDemo = () => {
  const pageInfo = getPageInfo()

  if (pageInfo.networkType || pageInfo.effectiveType) {
    action('网络信息')({
      networkType: pageInfo.networkType || '不可用',
      effectiveType: pageInfo.effectiveType || '不可用',
    })

    // 网络类型说明
    action('网络类型说明')({
      networkType: 'wifi / cellular / bluetooth / ethernet 等物理连接类型',
      effectiveType: '4g / 3g / 2g / slow-2g 等有效连接类型（基于网络质量）',
    })
  } else {
    action('网络信息')('当前浏览器不支持 Network Information API')

    action('支持情况')({
      Chrome: '支持（需 HTTPS）',
      Firefox: '不支持',
      Safari: '不支持',
      Edge: '支持（需 HTTPS）',
    })
  }
}

export default networkInfoDemo
