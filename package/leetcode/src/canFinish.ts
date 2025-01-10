export default function canFinish(
  numCourses: number,
  prerequisites: number[][]
): boolean {
  const inDegree = new Array(numCourses).fill(0)

  const map: Record<string, number[]> = {}

  // 初始化 入度 和 邻接表
  for (let i = 0; i < prerequisites.length; i++) {
    inDegree[prerequisites[i][0]]++

    if (map[prerequisites[i][1]]) {
      map[prerequisites[i][1]].push(prerequisites[i][0])
    } else {
      map[prerequisites[i][1]] = [prerequisites[i][0]]
    }
  }

  const queue = []

  // bfs 初始入口 入度为 0 的都可以选
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) queue.push(i)
  }

  let count = 0

  while (queue.length) {
    const selected = queue.shift() as number

    count++

    const toEnQueue = map[selected] // 获取被依赖数组

    if (toEnQueue && toEnQueue.length) {
      for (let i = 0; i < toEnQueue.length; i++) {
        // 课程一个依赖的 课程已经上完 可以减一个入度
        inDegree[toEnQueue[i]]--

        // 入度为 0 表示可以修 扔进 bfs 队列
        if (inDegree[toEnQueue[i]] === 0) {
          queue.push(toEnQueue[i])
        }
      }
    }
  }

  return count === numCourses
}
