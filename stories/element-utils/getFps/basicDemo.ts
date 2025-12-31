import getFps from '../../../packages/element-utils/src/getFps.ts'

const basicDemo = async () => {
  const fps = await getFps()
  return { fps, message: `当前帧率: ${fps} FPS` }
}

export default basicDemo
