// hammingDistance 未导出，这里展示算法思路
export default () => {
  const x = 1 // 二进制: 0001
  const y = 4 // 二进制: 0100

  // 计算汉明距离
  let strX = x.toString(2)
  let strY = y.toString(2)
  const maxLength = Math.max(strX.length, strY.length)
  strX = strX.padStart(maxLength, '0')
  strY = strY.padStart(maxLength, '0')

  let res = 0
  for (let i = 0; i < maxLength; i++) {
    if (strX[i] !== strY[i]) res++
  }

  console.log('x =', x, '二进制:', strX)
  console.log('y =', y, '二进制:', strY)
  console.log('汉明距离:', res)

  return res
}
