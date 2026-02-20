import '../../.css/index.css'
import sortedIndexDemo from './sortedIndexDemo'
import sortedIndexByDemo from './sortedIndexByDemo'

const SortedIndexDemo = () => {
  return (
    <div>
      <div className="button" onClick={sortedIndexDemo}>
        sortedIndex
      </div>
      <div className="button" onClick={sortedIndexByDemo}>
        sortedIndexBy
      </div>
    </div>
  )
}

export default SortedIndexDemo
