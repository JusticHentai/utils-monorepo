import scrollBottom from '.'

const element = document.getElementById('element') as HTMLElement

scrollBottom(element, () => {
  console.log('scrollBottom')
})
