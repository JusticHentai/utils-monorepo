import canFinish from '../../../../packages/learn-utils/src/leetcode/canFinish'

export default () => {
  const numCourses = 4
  const prerequisites = [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ]

  const result = canFinish(numCourses, prerequisites)

  console.log('课程数:', numCourses)
  console.log('先修课程关系:', prerequisites)
  console.log('能否完成所有课程:', result)

  return result
}
