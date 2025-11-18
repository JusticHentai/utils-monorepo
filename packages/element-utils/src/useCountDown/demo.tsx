import { useCallback, useEffect, useState } from 'react'
import useCountDown, { COUNT_DOWN_STATUS } from '.'

const Demo = () => {
  const [progress, setProgress] = useState(0)
  const cb = useCallback(() => {
    setProgress(progress + 1)

    return true
  }, [progress])

  const { countDown, countDownStatus, start, stop, resume } = useCountDown({
    cb,
    duration: 10,
  })

  useEffect(() => {
    start()
  }, [start])

  return (
    <div
      onClick={() =>
        countDownStatus === COUNT_DOWN_STATUS.RUNNING ? stop() : resume()
      }
    >
      {`${countDown} | ${countDownStatus}`}{' '}
    </div>
  )
}

export default Demo
