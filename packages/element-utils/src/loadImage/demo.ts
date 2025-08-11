import loadImage from './index'

const [img, err] = await loadImage('https://image.png')

console.log(img, err)
