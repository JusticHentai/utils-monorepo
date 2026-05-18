import { action } from 'storybook/actions'
import supportFetch from '../../../packages/element-utils/src/supportFetch'

const basicDemo = () => {
  action('fetch 支持检测')({
    supported: supportFetch(),
    usage: '网络上报前判断当前环境是否可以调用 fetch',
  })
}

export default basicDemo
