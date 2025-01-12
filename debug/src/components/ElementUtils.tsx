import { Canvas } from '@justichentai/element-utils'
import { useLayoutEffect, useRef, useState } from 'react'
import TestImage from '../assets/test-image.png'

const Components = () => {
  const elRef = useRef<HTMLDivElement>(null)
  const [Image, setImage] = useState<string>('')

  useLayoutEffect(() => {
    if (elRef.current) {
      const canvas = new Canvas({
        el: elRef.current,
        width: 1280,
        height: 720,
      })

      console.log(canvas)
      console.log('=== 图片 ===', TestImage)

      canvas
        .addImage({
          url: TestImage,
          x: 0,
          y: 0,
          width: 1280,
          height: 720,
        })
        .then(() => {
          canvas.addText({
            text: 'Hello, World!Hello, World!Hello, World!Hello, World!Hello, World!Hello, World!',
            x: 100,
            y: 100,
            fontSize: 24,
            fontWeight: 700,
            color: '#fff',
            width: 200,
            lineHeight: 30,
            font: 'Arial',
          })

          setTimeout(() => {
            const base64 = canvas.createBase64()

            console.log('=== base64 ===', base64)

            setImage(base64)
          }, 5000)
        })
    }
  }, [])

  return (
    <>
      <div
        ref={elRef}
        style={{
          width: '500px',
          height: '500px',
          backgroundColor: 'red',
        }}
      />
      <img src={Image} style={{ width: '1280px', height: '720px' }} />
    </>
  )
}

export default Components
