import { useEffect, useRef } from 'react'
import { FrameAnimation } from '../../../packages/element-utils/src'
import FrameImage from './image.png'

const Demo = () => {
  const elRef = useRef<HTMLDivElement>(null)

  const init = async () => {
    const fa = new FrameAnimation({
      imageUrl: FrameImage,
      frameCount: 20,
      duration: 20000,
      rowCount: 4,
    })

    await fa.preRender()

    const animation = fa.createInstance(elRef.current!)

    animation.start()
  }

  useEffect(() => {
    init()
  }, [])

  return <div ref={elRef}>FrameAnimation</div>
}

export default Demo
