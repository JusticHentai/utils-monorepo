import First from '../First'

type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]
type arr3 = []

type head1 = First<arr1>
type head2 = First<arr2>
type head3 = First<arr3>

const head1: head1 = 'a'
const head2: head2 = 3
const head3: head3 = undefined
