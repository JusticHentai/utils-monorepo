/**
 * 反转义 HTML 实体
 * @param string - 要反转义的字符串
 * @returns 返回反转义后的字符串
 * @example
 * unescape('fred, barney, &amp; pebbles')
 * // => 'fred, barney, & pebbles'
 */
const unescape = (string: string): string => {
  if (string == null) {
    return ''
  }

  const htmlUnescapes: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
  }

  return String(string).replace(
    /&(?:amp|lt|gt|quot|#39);/g,
    (entity) => htmlUnescapes[entity]
  )
}

export default unescape
