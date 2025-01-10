function hammingDistance(x: number, y: number): number {
  let strX = x.toString(2)
  let strY = y.toString(2)

  const maxLength = Math.max(strX.length, strY.length)

  strX = strX.padStart(maxLength, '0')
  strY = strY.padStart(maxLength, '0')

  let res = 0

  for (let i = 0; i < maxLength; i++) {
    if (strX[i] !== strY[i]) {
      res++
    }
  }

  return res
}
