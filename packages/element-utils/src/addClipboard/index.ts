/**
 * 将 text 复制到粘贴板
 * @param text 文本
 */
const addClipboard = async (text: string): Promise<[boolean, any]> => {
  let res, err
  try {
    await navigator.clipboard.writeText(text)
    res = true
  } catch (error: any) {
    res = false
    err = error
  }

  return [res, err]
}

export default addClipboard
