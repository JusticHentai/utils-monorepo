import { action } from 'storybook/actions'
import collectError from '../../../packages/js-utils/src/collectError'

const normalDemo = () => {
  collectError({
    runtime: (errorLog) => {
      action('运行时错误:')(errorLog)
    },
    reject: (errorLog) => {
      action('Promise 错误:')(errorLog)
    },
  })

  action('错误收集已初始化')()
}

export default normalDemo
