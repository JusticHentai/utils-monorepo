import Scheduler from '../../../../packages/learn-utils/src/handwritten/Scheduler'

const normalDemo = async () => {
  const scheduler = new Scheduler(2) // 最多同时执行2个任务
  const results: string[] = []

  const addTask = (time: number, order: string) => {
    scheduler.add(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          results.push(order)
          resolve(order)
        }, time)
      })
    })
  }

  addTask(1000, '1')
  addTask(500, '2')
  addTask(300, '3')
  addTask(400, '4')

  // 等待所有任务完成
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return {
    message: '并发调度器（最大并发数：2）',
    executionOrder: results, // ['2', '3', '1', '4']
    explanation: '任务1和2先执行，2先完成后3开始，3完成后4开始',
  }
}

export default normalDemo
