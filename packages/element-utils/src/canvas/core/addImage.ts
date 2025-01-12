import loadImage from '@/resource/loadImage'

export interface AddImageOptions {
  url: string
  x: number
  y: number
  width: number
  height: number
  ctx: CanvasRenderingContext2D
}

const addImage = async (options: AddImageOptions) => {
  const { url, x, y, width, height, ctx } = options

  const [res, error] = await loadImage(url)

  if (error) {
    return [res, error]
  }

  ctx.drawImage(res, x, y, width, height)
}

export default addImage
