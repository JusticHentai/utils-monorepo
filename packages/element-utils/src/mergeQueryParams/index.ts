/**
 * 将 sourceUrl 的查询参数加到 targetUrl 中
 * @param sourceUrl 源 URL
 * @param targetUrl 目标 URL
 * @returns 添加查询参数后的 targetUrl
 */
const mergeQueryParams = (sourceUrl: string, targetUrl: string): string => {
  const currentParams = new URLSearchParams(sourceUrl)

  const url = new URL(targetUrl)

  currentParams.forEach((value, key) => {
    url.searchParams.set(key, value)
  })

  return url.toString()
}

export default mergeQueryParams
