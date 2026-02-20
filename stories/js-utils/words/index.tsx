import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import wordsDemo from './wordsDemo'

const WordsDemo = () => {
  return (
    <div>
      <div className="button" onClick={wordsDemo}>
        分词
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default WordsDemo
