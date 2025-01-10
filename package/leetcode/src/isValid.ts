export default function isValid(s: string): boolean {
  const n = s.length
  if (n % 2 === 1) {
    return false
  }

  const pairs = new Map([
    [')', '('],
    [']', '['],
    ['}', '{'],
  ])

  const stk = []

  for (const ch of s) {
    if (pairs.has(ch)) {
      if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
        return false
      }
      stk.pop()
    } else {
      stk.push(ch)
    }
  }

  return !stk.length
}
