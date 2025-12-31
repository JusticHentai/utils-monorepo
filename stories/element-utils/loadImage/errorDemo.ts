import loadImage from '../../../packages/element-utils/src/loadImage'

const errorDemo = async () => {
  const [img, err] = await loadImage('https://invalid-url.png')

  if (err) {
    return { success: false, error: err.message }
  }

  return { success: true, width: img?.width, height: img?.height }
}

export default errorDemo
