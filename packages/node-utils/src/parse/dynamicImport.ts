/**
 * 动态引入 js 配置文件
 * file 文件路径
 */
const dynamicImport = new Function('file', 'return import(file)')

export default dynamicImport
