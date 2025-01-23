const surveillanceDuration = () => {
  const navigationEntries = performance.getEntriesByType('navigation')

  if (navigationEntries.length > 0) {
    const navTiming = navigationEntries[0] // 获取第一个导航条目

    console.log('页面 URL:', navTiming.name)
    console.log('导航开始时间:', navTiming.startTime.toFixed(2), '毫秒')
    console.log('导航持续时间:', navTiming.duration.toFixed(2), '毫秒')
  } else {
    console.log('没有导航性能数据可用。')
  }
}

export default surveillanceDuration
