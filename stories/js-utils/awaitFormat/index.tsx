import awaitFormat from '../../../packages/js-utils/src/awaitFormat'
import sleep from '../../../packages/js-utils/src/sleep'
import '../../.css/index.css'

import { action } from 'storybook/actions'

const AwaitFormatDemo = () => {
  const successFn = async () => {
    await sleep(1000)

    return Promise.resolve('success')
  }

  const errorFn = async () => {
    await sleep(1000)

    return Promise.reject('error')
  }

  const formatSuccessFn = async () => {
    const [res, err] = await awaitFormat(successFn)()

    action('log')({ res, err })
  }

  const formatErrorFn = async () => {
    const [res, err] = await awaitFormat(errorFn)()

    action('log')({ res, err })
  }

  return (
    <>
      <div
        className="storybook-button storybook-button-gap"
        onClick={formatSuccessFn}
      >
        success
      </div>
      <div className="storybook-button" onClick={formatErrorFn}>
        error
      </div>
    </>
  )
}

export default AwaitFormatDemo
