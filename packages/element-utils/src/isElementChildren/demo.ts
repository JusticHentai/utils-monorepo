import isElementChildren from '.'

const element = document.getElementById('element') as HTMLElement
const children = document.getElementById('children') as HTMLElement

const isChildren = isElementChildren(element, children)

console.log(isChildren)
