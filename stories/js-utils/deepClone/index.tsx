import '../../.css/index.css'
import circularDemo from './circularDemo'
import dateDemo from './dateDemo'
import normalDemo from './normalDemo'
import regExpDemo from './regExpDemo'
import arrayDemo from './arrayDemo'
import symbolDemo from './symbolDemo'
import mixedDemo from './mixedDemo'
import mapDemo from './mapDemo'
import setDemo from './setDemo'
import arrayBufferDemo from './arrayBufferDemo'
import typedArrayDemo from './typedArrayDemo'
import dataViewDemo from './dataViewDemo'
import errorDemo from './errorDemo'

const deepCloneDemo = () => {
  return (
    <div>
      <div className="button" onClick={normalDemo}>
        深拷贝普通对象
      </div>
      <div className="button" onClick={circularDemo}>
        深拷贝循环引用对象
      </div>
      <div className="button" onClick={dateDemo}>
        深拷贝 Date 对象
      </div>
      <div className="button" onClick={regExpDemo}>
        深拷贝 RegExp 对象
      </div>
      <div className="button" onClick={arrayDemo}>
        深拷贝数组
      </div>
      <div className="button" onClick={symbolDemo}>
        深拷贝 Symbol 键
      </div>
      <div className="button" onClick={mapDemo}>
        深拷贝 Map
      </div>
      <div className="button" onClick={setDemo}>
        深拷贝 Set
      </div>
      <div className="button" onClick={arrayBufferDemo}>
        深拷贝 ArrayBuffer
      </div>
      <div className="button" onClick={typedArrayDemo}>
        深拷贝 TypedArray
      </div>
      <div className="button" onClick={dataViewDemo}>
        深拷贝 DataView
      </div>
      <div className="button" onClick={errorDemo}>
        深拷贝 Error
      </div>
      <div className="button" onClick={mixedDemo}>
        深拷贝混合类型
      </div>
    </div>
  )
}

export default deepCloneDemo
