import mergeClass from '.'

const cl1 = 'cl1'
const cl2 = ['cl2', 'cl3']
const cl3 = {
  cl4: true,
  cl5: false,
}

const cl6 = undefined
const cl7 = null
const cl8 = false
const cl9 = true

const classname = mergeClass(cl1, cl2, cl3, cl6, cl7, cl8, cl9)

console.log(classname) // cl1 cl2 cl3 cl4 cl9
