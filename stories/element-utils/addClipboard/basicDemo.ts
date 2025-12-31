import addClipboard from '../../../packages/element-utils/src/addClipboard'

const basicDemo = async () => {
  const [res, err] = await addClipboard('Hello World')
  return { success: res, error: err }
}

export default basicDemo
