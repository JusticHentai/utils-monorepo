import { action } from 'storybook/actions'
import secondsToHHMMSS from '../../../packages/js-utils/src/secondsToHHMMSS'

const normalDemo = () => {
  const res = secondsToHHMMSS(126)
  action('126 秒转换结果')(res) // [0, 0, 0, 2, 0, 6] 表示 00:02:06
}

export default normalDemo
