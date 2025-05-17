const mergeQueryParams = (targetUrl: string): string => {
  // 获取当前 URL 的查询参数
  const currentParams = new URLSearchParams(window.location.search)
  // 解析目标 URL（支持相对路径）
  const url = new URL(targetUrl, window.location.href)

  // 将当前参数添加到目标 URL，覆盖同名参数
  currentParams.forEach((value, key) => {
    url.searchParams.set(key, value)
  })

  return url.toString()
}

export default mergeQueryParams
