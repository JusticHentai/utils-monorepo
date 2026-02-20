declare const process: { env: { NODE_ENV: string } }

export default function warning(condition: boolean, message: string) {
  if (typeof process !== 'undefined' && process.env.NODE_ENV !== 'production' && console) {
    if (condition) {
      console.warn(`[@justichentai/components]: ${message}`)
    }
  }
}
