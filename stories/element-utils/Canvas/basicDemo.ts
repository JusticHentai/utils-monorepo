import Canvas from '../../../packages/element-utils/src/canvas'

const basicDemo = () => {
  // 注意：这里只是演示 API 用法，实际使用需要在 DOM 环境中
  return {
    message: 'Canvas 类提供以下方法',
    methods: ['addImage', 'addText', 'createBase64'],
    usage: `
const canvas = new Canvas({ width: 800, height: 600 })
await canvas.addImage({ src: 'image.png', x: 0, y: 0 })
canvas.addText({ text: 'Hello', x: 100, y: 100 })
const base64 = canvas.createBase64()
    `.trim(),
  }
}

export default basicDemo
