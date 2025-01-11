export default function findKthLargest(nums: number[], k: number): number {
  let heapSize = nums.length

  buildMaxHeap(nums, heapSize)

  // 取 k 在最顶 所以 + 1 少做一次
  for (let i = nums.length - 1; i >= nums.length - k + 1; i--) {
    ;[nums[0], nums[i]] = [nums[i], nums[0]]

    // 下沉后 不在运算它
    --heapSize

    maxHeapify(nums, 0, heapSize)
  }

  return nums[0]
}

// 自下而上 构建大顶堆
function buildMaxHeap(nums: number[], heapSize: number) {
  for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
    maxHeapify(nums, i, heapSize)
  }
}

// 从左向右 自上而下调整节点
function maxHeapify(nums: number[], i: number, heapSize: number) {
  const l = i * 2 + 1
  const r = i * 2 + 2

  let largest = i

  // 父节点 i 与 左子节点比
  if (l < heapSize && nums[l] > nums[largest]) {
    largest = l
  }

  if (r < heapSize && nums[r] > nums[largest]) {
    largest = r
  }

  // 如果最大有变化 调整节点
  if (largest !== i) {
    ;[nums[largest], nums[i]] = [nums[i], nums[largest]]

    // 调整下一个 非叶子节点
    maxHeapify(nums, largest, heapSize)
  }
}
