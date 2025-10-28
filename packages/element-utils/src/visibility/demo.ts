import visibility from './index'

// 监听 visibilitychange 事件
const removeEvent = visibility({
  visible: () => {
    console.log('visible')
  },
  hidden: () => {
    console.log('hidden')
  },
})

// 移除事件
removeEvent()
