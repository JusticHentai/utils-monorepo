/**
 * 将 sourceUrl 的查询参数合并到 targetUrl 中
 * @param sourceUrl 源 URL（提取其查询参数）
 * @param targetUrl 目标 URL
 * @returns 合并查询参数后的 targetUrl
 */
const mergeQueryParams = (sourceUrl: string, targetUrl: string): string => {
  const sourceUrlObj = new URL(sourceUrl)
  const targetUrlObj = new URL(targetUrl)

  sourceUrlObj.searchParams.forEach((value, key) => {
    targetUrlObj.searchParams.set(key, value)
  })

  return targetUrlObj.toString()
}

export default mergeQueryParams
