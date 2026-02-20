import { BuildUrlOptions, ParsedUrl, ParseUrlOptions } from './interface'

/**
 * 解析 URL 字符串
 * 提取查询参数和路径片段
 */
const parseUrl = (
  url: string,
  options: ParseUrlOptions = {}
): ParsedUrl | null => {
  const { decode = true, arrayFormat = true } = options

  if (!url || typeof url !== 'string') {
    return null
  }

  let parsedUrl: URL

  try {
    // 尝试直接解析
    parsedUrl = new URL(url)
  } catch {
    // 如果失败，尝试添加协议后解析
    try {
      parsedUrl = new URL(`https://${url}`)
    } catch {
      return null
    }
  }

  /**
   * 解析查询参数
   */
  const parseQuery = (): Record<string, string | string[]> => {
    const query: Record<string, string | string[]> = {}
    const searchParams = parsedUrl.searchParams

    searchParams.forEach((value, key) => {
      const decodedKey = decode ? decodeURIComponent(key) : key
      const decodedValue = decode ? decodeURIComponent(value) : value

      if (arrayFormat && query[decodedKey] !== undefined) {
        // 如果已存在该键，转换为数组
        const existing = query[decodedKey]
        if (Array.isArray(existing)) {
          existing.push(decodedValue)
        } else {
          query[decodedKey] = [existing, decodedValue]
        }
      } else {
        query[decodedKey] = decodedValue
      }
    })

    return query
  }

  /**
   * 解析路径片段
   */
  const parsePathSegments = (): string[] => {
    const pathname = parsedUrl.pathname
    const segments = pathname.split('/').filter(Boolean)

    if (decode) {
      return segments.map((segment) => decodeURIComponent(segment))
    }

    return segments
  }

  const hashValue = parsedUrl.hash.startsWith('#')
    ? parsedUrl.hash.slice(1)
    : parsedUrl.hash

  return {
    href: parsedUrl.href,
    protocol: parsedUrl.protocol.replace(':', ''),
    hostname: parsedUrl.hostname,
    port: parsedUrl.port,
    host: parsedUrl.host,
    pathname: decode
      ? decodeURIComponent(parsedUrl.pathname)
      : parsedUrl.pathname,
    pathSegments: parsePathSegments(),
    search: parsedUrl.search,
    query: parseQuery(),
    hash: parsedUrl.hash,
    hashValue: decode ? decodeURIComponent(hashValue) : hashValue,
    username: decode
      ? decodeURIComponent(parsedUrl.username)
      : parsedUrl.username,
    password: decode
      ? decodeURIComponent(parsedUrl.password)
      : parsedUrl.password,
    origin: parsedUrl.origin,
  }
}

/**
 * 构建 URL 字符串
 */
export const buildUrl = (options: BuildUrlOptions): string => {
  const {
    baseUrl = '',
    pathname = '',
    pathSegments = [],
    query = {},
    hash = '',
  } = options

  let url = baseUrl

  // 添加路径
  if (pathname) {
    url = url.replace(/\/$/, '') + pathname
  }

  // 添加路径片段
  if (pathSegments.length > 0) {
    const segments = pathSegments
      .map((segment) => encodeURIComponent(String(segment)))
      .join('/')
    url = url.replace(/\/$/, '') + '/' + segments
  }

  // 添加查询参数
  const queryEntries = Object.entries(query)
  if (queryEntries.length > 0) {
    const searchParams = new URLSearchParams()

    queryEntries.forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => searchParams.append(key, String(v)))
      } else {
        searchParams.append(key, String(value))
      }
    })

    url += '?' + searchParams.toString()
  }

  // 添加哈希
  if (hash) {
    url += '#' + encodeURIComponent(hash)
  }

  return url
}

/**
 * 获取单个查询参数
 */
export const getQueryParam = (
  url: string,
  key: string,
  decode = true
): string | null => {
  try {
    const parsed = parseUrl(url, { decode })
    const value = parsed?.query[key]

    if (value === undefined) {
      return null
    }

    return Array.isArray(value) ? value[0] : value
  } catch {
    return null
  }
}

/**
 * 获取所有查询参数（同名参数返回数组）
 */
export const getQueryParams = (
  url: string,
  key: string,
  decode = true
): string[] => {
  try {
    const parsed = parseUrl(url, { decode, arrayFormat: true })
    const value = parsed?.query[key]

    if (value === undefined) {
      return []
    }

    return Array.isArray(value) ? value : [value]
  } catch {
    return []
  }
}

/**
 * 设置查询参数
 */
export const setQueryParam = (
  url: string,
  key: string,
  value: string | number | boolean
): string | null => {
  try {
    const parsedUrl = new URL(url)
    parsedUrl.searchParams.set(key, String(value))
    return parsedUrl.toString()
  } catch {
    return null
  }
}

/**
 * 删除查询参数
 */
export const removeQueryParam = (url: string, key: string): string | null => {
  try {
    const parsedUrl = new URL(url)
    parsedUrl.searchParams.delete(key)
    return parsedUrl.toString()
  } catch {
    return null
  }
}

/**
 * 检查 URL 是否有效
 */
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

export default parseUrl
