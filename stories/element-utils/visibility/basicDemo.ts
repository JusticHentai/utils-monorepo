import visibility from '../../../packages/element-utils/src/visibility'

const basicDemo = () => {
  const removeEvent = visibility({
    visible: () => {
      console.log('页面可见')
    },
    hidden: () => {
      console.log('页面隐藏')
    },
  })

  return { message: '已添加可见性监听', removeEvent }
}

export default basicDemo
