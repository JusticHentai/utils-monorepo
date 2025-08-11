import isPureElement from '.'

const element = document.getElementById('element') as HTMLElement
const isPure = isPureElement(element)

console.log(isPure)
