import { action } from 'storybook/actions'
import formatBytes from '../../../packages/element-utils/src/formatBytes'
import getPageInfo from '../../../packages/element-utils/src/getPageInfo'

const memoryInfoDemo = () => {
  const pageInfo = getPageInfo()

  if (pageInfo.memory) {
    const { jsHeapSizeLimit, totalJSHeapSize, usedJSHeapSize } = pageInfo.memory

    action('内存信息（原始）')(pageInfo.memory)

    action('内存信息（格式化）')({
      'JS 堆大小限制': formatBytes(jsHeapSizeLimit).formatted,
      'JS 堆总大小': formatBytes(totalJSHeapSize).formatted,
      'JS 堆已用大小': formatBytes(usedJSHeapSize).formatted,
      使用率: `${((usedJSHeapSize / jsHeapSizeLimit) * 100).toFixed(2)}%`,
    })
  } else {
    action('内存信息')('当前浏览器不支持 Performance Memory API')

    action('支持情况')({
      Chrome: '支持（需启动时添加 --enable-precise-memory-info 标志）',
      Firefox: '不支持',
      Safari: '不支持',
      Edge: '支持（需启动时添加标志）',
    })
  }
}

export default memoryInfoDemo
