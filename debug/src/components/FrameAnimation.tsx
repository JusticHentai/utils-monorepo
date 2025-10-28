import { frameAnimation, getFPS } from '@justichentai/element-utils'
import { useEffect, useRef } from 'react'
import FrameImage from '../assets/frame.webp'

const FrameAnimation = () => {
  const elRef = useRef<HTMLDivElement>(null)
  const faRef = useRef<frameAnimation | null>(null)

  const initCanvas = async () => {
    faRef.current = new frameAnimation({
      el: elRef.current!,
      url: FrameImage,
      frame: 12,
      duration: 1000,
    })

    await faRef.current.init()
  }

  useEffect(() => {
    initCanvas()

    setInterval(async () => {
      const fps = await getFPS()
      console.log('=== fps ===', fps)
    }, 2000)
  }, [])

  return (
    <>
      {Array.from({ length: 30 }).map((_, index) => (
        <Item key={index} />
      ))}
    </>
  )
}

export default FrameAnimation

const Item = () => {
  const elRef = useRef<HTMLDivElement>(null)
  const faRef = useRef<frameAnimation | null>(null)

  const initCanvas = async () => {
    faRef.current = new frameAnimation({
      el: elRef.current!,
      url: FrameImage,
      frame: 12,
      duration: 1000,
    })

    await faRef.current.init()

    faRef.current.play()
  }

  useEffect(() => {
    initCanvas()
  }, [])

  return (
    <div
      ref={elRef}
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: 'red',
      }}
      onClick={() => {
        faRef.current?.play()
      }}
    />
  )
}
