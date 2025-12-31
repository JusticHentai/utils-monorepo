import mergeQueryParams from '../../../packages/element-utils/src/mergeQueryParams'

const basicDemo = () => {
  const sourceUrl = 'https://www.example.com?a=1&b=2'
  const targetUrl = 'https://www.target.com?c=3&d=4'

  const result = mergeQueryParams(sourceUrl, targetUrl)

  return { mergedUrl: result }
}

export default basicDemo
