export default function minMeetingRooms(intervals: number[][]): number {
  const start: number[] = []
  const end: number[] = []

  intervals.forEach((v) => {
    start.push(v[0])
    end.push(v[1])
  })

  start.sort((a, b) => a - b)
  end.sort((a, b) => a - b)

  let l = 0,
    r = 0,
    n = 0

  while (l < start.length) {
    end[r] > start[l] ? n++ : r++, l++
  }

  return n
}

const obj: Record<string, any> = {
  a: 1,
  b: true,
  c: 'hello',
}

function getProperty<T extends object, K extends keyof T>(
  obj: T,
  key: K
): T[K] {
  return obj[key]
}

const val = getProperty(obj, 'c')
