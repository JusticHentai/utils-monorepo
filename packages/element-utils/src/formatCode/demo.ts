import formatCode, { needsFormatting, formatCodeBatch } from '.'

// 格式化 JavaScript 代码
const jsCode = `const foo = {a:1,b:2,c:3};function bar(x,y){return x+y}`

formatCode(jsCode, { language: 'javascript' }).then((result) => {
  console.log('格式化后的 JS:', result.code)
  // const foo = { a: 1, b: 2, c: 3 }
  // function bar(x, y) {
  //   return x + y
  // }
})

// 格式化 TypeScript 代码
const tsCode = `interface User{name:string;age:number}const user:User={name:'张三',age:25}`

formatCode(tsCode, { language: 'typescript' }).then((result) => {
  console.log('格式化后的 TS:', result.code)
})

// 格式化 JSON
const jsonCode = `{"name":"张三","age":25,"address":{"city":"北京","street":"长安街"}}`

formatCode(jsonCode, { language: 'json' }).then((result) => {
  console.log('格式化后的 JSON:', result.code)
})

// 格式化 CSS
const cssCode = `.container{display:flex;justify-content:center;align-items:center;}`

formatCode(cssCode, { language: 'css' }).then((result) => {
  console.log('格式化后的 CSS:', result.code)
})

// 自动检测语言
const autoDetectCode = `const x = 1`
formatCode(autoDetectCode).then((result) => {
  console.log('自动检测格式化:', result.code)
})

// 自定义 Prettier 配置
formatCode(jsCode, {
  language: 'javascript',
  prettierOptions: {
    semi: true,
    singleQuote: false,
    tabWidth: 4,
  },
}).then((result) => {
  console.log('自定义配置格式化:', result.code)
})

// 检查是否需要格式化
needsFormatting(jsCode).then((needs) => {
  console.log('是否需要格式化:', needs) // true
})

// 批量格式化
formatCodeBatch([
  { code: jsCode, options: { language: 'javascript' } },
  { code: tsCode, options: { language: 'typescript' } },
  { code: jsonCode, options: { language: 'json' } },
]).then((results) => {
  console.log('批量格式化结果:', results)
})

// 处理格式化错误
const invalidCode = `const x = {`
formatCode(invalidCode, { language: 'javascript' }).then((result) => {
  if (!result.success) {
    console.log('格式化失败:', result.error)
  }
})
