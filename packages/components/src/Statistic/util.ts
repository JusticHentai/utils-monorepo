function padStart(str: string, length: number, char: string): string {
  while (str.length < length) {
    str = char + str
  }
  return str
}

const units: [string, number][] = [
  ['Y', 1000 * 60 * 60 * 24 * 365],
  ['M', 1000 * 60 * 60 * 24 * 30],
  ['D', 1000 * 60 * 60 * 24],
  ['H', 1000 * 60 * 60],
  ['m', 1000 * 60],
  ['s', 1000],
  ['S', 1],
]

export function getDateString(millisecond: number, format: string) {
  let leftMillisecond: number = millisecond
  return units.reduce((current, [name, unit]) => {
    if (current.indexOf(name) !== -1) {
      const value = Math.floor(leftMillisecond / unit)
      leftMillisecond -= value * unit
      return current.replace(new RegExp(`${name}+`, 'g'), (match: string) => {
        const len = match.length
        return padStart(value.toString(), len, '0')
      })
    }
    return current
  }, format)
}
