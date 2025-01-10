import Length from '../Length'

type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = [
  'FALCON 9',
  'FALCON HEAVY',
  'DRAGON',
  'STARSHIP',
  'HUMAN SPACEFLIGHT'
]

type teslaLength = Length<tesla>
type spaceXLength = Length<spaceX>

const teslaLength: teslaLength = 4
const spaceXLength: spaceXLength = 5
