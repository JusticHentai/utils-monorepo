import TupleToObject from '../TupleToObject'

const tuple = ['tesla', 'model 3', 'model X', 'model Y']

type result = TupleToObject<typeof tuple>

const result: result = {
  tesla: 'tesla',
  'model 3': 'model 3',
  'model X': 'model X',
  'model Y': 'model Y',
}

console.log(result)
