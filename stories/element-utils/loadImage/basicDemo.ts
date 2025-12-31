import loadImage from '../../../packages/element-utils/src/loadImage'

const basicDemo = async () => {
  const [img, err] = await loadImage(
    'https://via.placeholder.com/150'
  )

  if (err) {
    return { success: false, error: err.message }
  }

  return { success: true, width: img?.width, height: img?.height }
}

export default basicDemo
