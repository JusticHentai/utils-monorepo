export default function randomColor() {
  const n = Math.floor(Math.random() * 16 * 16 * 16 * 16 * 16 * 16).toString(16)

  return `#${n}`
}
