export default function flat(array: any[], deep: number): any[] {
  if (deep === 0) {
    return array
  }

  return array.reduce(
    (result, curr) =>
      result.concat(Array.isArray(curr) ? flat(curr, deep - 1) : curr),
    []
  )
}
