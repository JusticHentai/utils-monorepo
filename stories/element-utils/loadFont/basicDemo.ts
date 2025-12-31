import loadFont from '../../../packages/element-utils/src/loadFont'

const basicDemo = async () => {
  const [font, err] = await loadFont(
    'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxP.ttf',
    'Roboto'
  )

  if (err) {
    return { success: false, error: err.message }
  }

  return { success: true, fontFamily: font?.family }
}

export default basicDemo
