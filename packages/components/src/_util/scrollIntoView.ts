export default function scrollIntoView(
  container: HTMLElement,
  selected: HTMLElement
) {
  if (!selected) return

  const offsetTop = selected.offsetTop
  const offsetBottom = offsetTop + selected.clientHeight
  const scrollTop = container.scrollTop
  const scrollBottom = scrollTop + container.clientHeight

  if (offsetTop < scrollTop) {
    container.scrollTop = offsetTop
  } else if (offsetBottom > scrollBottom) {
    container.scrollTop = offsetBottom - container.clientHeight
  }
}
