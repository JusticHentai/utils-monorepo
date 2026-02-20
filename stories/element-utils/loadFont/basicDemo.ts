import { action } from 'storybook/actions'
import loadFont from '../../../packages/element-utils/src/loadFont'

const basicDemo = async () => {
  const [font, err] = await loadFont(
    'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxP.ttf',
    'Roboto'
  )

  if (err) {
    action('加载字体')({ success: false, error: err.message })
    return
  }

  action('加载字体')({ success: true, fontFamily: font?.family })
}

export default basicDemo
