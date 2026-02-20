import uniqueId from '../uniqueId'
import { SESSION_ID_KEY } from './interface'

/**
 * 生成会话 ID
 * @returns 会话 ID，同一会话内保持不变
 */
const sessionId = (): string => {
  let id = sessionStorage.getItem(SESSION_ID_KEY)

  if (!id) {
    id = uniqueId()
    sessionStorage.setItem(SESSION_ID_KEY, id)
  }

  return id
}

export default sessionId
