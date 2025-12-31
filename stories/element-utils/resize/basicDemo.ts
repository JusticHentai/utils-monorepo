import resize from '../../../packages/element-utils/src/resize'

const basicDemo = () => {
  resize({
    preset: {
      width: 1920,
      height: 1080,
    },
    cb: (ctx) => {
      console.log('resize ratio:', ctx.ratio)
    },
  })

  return { message: '已初始化 resize 适配' }
}

export default basicDemo
