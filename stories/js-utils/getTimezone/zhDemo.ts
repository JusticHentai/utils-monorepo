import getTimezone from '../../../packages/js-utils/src/time/getTimezone'

const zhDemo = () => {
  return getTimezone(Date.now(), 'zh-CN')
}

export default zhDemo
