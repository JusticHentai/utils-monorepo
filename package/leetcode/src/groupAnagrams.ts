export default function groupAnagrams(strs: string[]): string[][] {
  const map = {}

  for (const str of strs) {
    const count = new Array(26).fill(0)

    for (const char of str) {
      count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
    }

    // @ts-ignore any
    map[count] ? map[count].push(str) : (map[count] = [str])
  }

  return Object.values(map)
}
