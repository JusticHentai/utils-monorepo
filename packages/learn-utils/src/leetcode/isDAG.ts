export default function isDAG(path: [string, string][]): boolean {
  const inDegree: Record<string, number> = {}
  const map: Record<string, string[]> = {}

  // 初始化邻接表 和 入度表
  for (const [start, end] of path) {
    if (!inDegree[start]) {
      inDegree[start] = 0
    }

    inDegree[end] = inDegree[end] ? inDegree[end] + 1 : 1

    if (map[start]) {
      map[start].push(end)
    } else {
      map[start] = [end]
    }
  }

  const queue = []

  // bfs 初始入口 入度为 0 的都可以选
  for (const key in inDegree) {
    if (!inDegree[key]) queue.push(key)
  }

  let count = 0

  while (queue.length) {
    // 获取当前节点
    const node = queue.shift()

    // 获取依赖数组
    const array = map[node as string] as string[]

    count++

    if (!array) {
      continue
    }

    for (const item of array) {
      // 给边减去入度
      inDegree[item]--

      // 入度归 0 继续删
      if (!inDegree[item]) {
        queue.push(item)
      }
    }
  }

  return count === Object.keys(inDegree).length
}
