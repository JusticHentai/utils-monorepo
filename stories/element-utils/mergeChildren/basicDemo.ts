const basicDemo = () => {
  return {
    message: 'mergeChildren 用于合并相邻的纯文本子元素',
    example: `
// 输入: ['Hello', ' ', 'World', <span>!</span>]
// 输出: [<span>Hello World</span>, <span>!</span>]
    `.trim(),
  }
}

export default basicDemo
