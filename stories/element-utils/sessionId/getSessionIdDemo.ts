import { action } from 'storybook/actions'
import sessionId from '../../../packages/element-utils/src/sessionId'

const getSessionIdDemo = () => {
  const id1 = sessionId()
  const id2 = sessionId()
  const id3 = sessionId()

  action('获取的会话ID（同一会话内相同）')({ id1, id2, id3 })
}

export default getSessionIdDemo
