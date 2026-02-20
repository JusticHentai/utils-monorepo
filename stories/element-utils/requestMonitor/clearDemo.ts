import { action } from 'storybook/actions'
import { monitor } from './observeAllDemo'

const clearDemo = () => {
  monitor.clear()

  action('清空记录')('已清空所有请求记录')
}

export default clearDemo
