export default function minWindow(s: string, t: string): string {
  let minLength = s.length + 1
  let start = s.length

  const map: Record<string, number> = {}
  let missingType = 0

  for (const c of t) {
    if (!map[c]) {
      missingType++
      map[c] = 1
    } else {
      map[c]++
    }
  }

  let l = 0,
    r = 0

  for (; r < s.length; r++) {
    const rightChar = s[r]

    if (map[rightChar] !== undefined) map[rightChar]--

    if (map[rightChar] === 0) missingType--

    while (missingType === 0) {
      if (r - l + 1 < minLength) {
        minLength = r - l + 1
        start = l
      }

      const leftChar = s[l]

      if (map[leftChar] !== undefined) map[leftChar]++

      if (map[leftChar] > 0) missingType++

      l++
    }
  }

  if (start === s.length) return ''

  return s.substring(start, start + minLength)
}
