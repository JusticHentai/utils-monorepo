import isFunction from '../../../packages/js-utils/src/isFunction'

const notFunctionDemo = () => {
  return isFunction({ a: 1 })
}

export default notFunctionDemo
