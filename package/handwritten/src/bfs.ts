export const bfs1 = (data: any[]): number[] => {
  const queue = [...data]
  const res: number[] = []

  while (queue.length) {
    const length = queue.length

    res.push(length)

    for (let i = 0; i < length; i++) {
      const node = queue.shift()

      queue.push(...node.children)
    }
  }

  return res
}

export const bfs2 = (data: any[]): number[] => {
  const queue = [...data]
  const res: number[] = []
  const map = new Map<any, number>()

  // 初始的要记录一遍
  for (const node of queue) {
    if (map.has(node)) {
      continue
    }

    map.set(node, 1)
  }

  // 正常 bfs
  while (queue.length) {
    // 处理每轮队列中的数组结果
    const length = queue.length

    res.push(length)

    // 处理 单个
    for (let i = 0; i < length; i++) {
      const node = queue.shift()

      for (const item of node.children) {
        if (map.has(item)) {
          continue
        }

        map.set(item, 1)

        queue.push(item)
      }
    }
  }

  return res
}

export const bfs3 = (data: any[], id: number) => {
  const queue = [...data]
  const map = new Map<any, number>()

  // 初始的要记录一遍
  for (const node of queue) {
    if (map.has(node)) {
      continue
    }

    if (node.id === id) {
      return node.name
    }

    map.set(node, 1)
  }

  // 正常 bfs
  while (queue.length) {
    // 处理每轮队列中的数组结果
    const length = queue.length

    for (let i = 0; i < length; i++) {
      const node = queue.shift()

      for (const item of node.children) {
        // 处理 单个
        if (map.has(item)) {
          continue
        }

        if (item.id === id) {
          return item.name
        }

        map.set(item, 1)

        queue.push(item)
      }
    }
  }

  return -1
}
