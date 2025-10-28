import mergeQueryParams from '.'

const sourceUrl = 'https://www.baidu.com?a=1&b=2'
const targetUrl = 'https://www.xiaohongshu.com?c=3&d=4'

const mergedUrl = mergeQueryParams(sourceUrl, targetUrl)

console.log(mergedUrl) // https://www.xiaohongshu.com?a=1&b=2&c=3&d=4
