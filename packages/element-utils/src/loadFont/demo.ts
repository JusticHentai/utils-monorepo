import loadFont from './index'

const [font, err] = await loadFont('https://fonts', 'Roboto')

console.log(font, err)
