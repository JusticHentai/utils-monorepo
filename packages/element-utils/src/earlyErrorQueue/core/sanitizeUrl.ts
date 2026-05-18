import truncateText from '../../truncateText'
import {
  DEFAULT_EARLY_ERROR_MAX_MESSAGE_LENGTH,
  DEFAULT_EARLY_ERROR_SENSITIVE_KEYS,
} from '../interface'

/** URL 隐私过滤 */
const sanitizeUrl = (
  url: string | undefined,
  sensitiveKeys: RegExp = DEFAULT_EARLY_ERROR_SENSITIVE_KEYS,
  maxLength = DEFAULT_EARLY_ERROR_MAX_MESSAGE_LENGTH,
  baseUrl?: string
): string | undefined => {
  if (!url) return undefined

  try {
    const parsedUrl = new URL(url, baseUrl)
    const keys = Array.from(parsedUrl.searchParams.keys())

    keys.forEach((key) => {
      if (sensitiveKeys.test(key)) {
        parsedUrl.searchParams.set(key, '[Filtered]')
      }
    })

    return truncateText(parsedUrl.toString(), maxLength)
  } catch {
    return truncateText(String(url), maxLength)
  }
}

export default sanitizeUrl
