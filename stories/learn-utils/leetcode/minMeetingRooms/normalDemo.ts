import minMeetingRooms from '@jqxon/learn-utils/leetcode/minMeetingRooms'

export default () => {
  const intervals = [
    [0, 30],
    [5, 10],
    [15, 20],
  ]

  const result = minMeetingRooms(intervals)

  console.log('会议时间:', intervals)
  console.log('最少需要会议室数量:', result)

  return result
}
