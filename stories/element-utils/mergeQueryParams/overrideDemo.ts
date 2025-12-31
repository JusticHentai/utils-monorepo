import mergeQueryParams from '../../../packages/element-utils/src/mergeQueryParams'

const overrideDemo = () => {
  const sourceUrl = 'https://www.example.com?a=1&b=2'
  const targetUrl = 'https://www.target.com?a=override&c=3'

  const result = mergeQueryParams(sourceUrl, targetUrl)

  return { mergedUrl: result, note: '参数 a 被覆盖' }
}

export default overrideDemo
