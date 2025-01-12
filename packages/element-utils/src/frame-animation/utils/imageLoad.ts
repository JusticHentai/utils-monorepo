/**
 * 下载图片
 * @param url string 图片url
 */
export default function imageLoad(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = url
    img.onload = () => {
      resolve(img)
    }
    img.onerror = () => {
      reject('图片加载出错')
    }
  })
}
