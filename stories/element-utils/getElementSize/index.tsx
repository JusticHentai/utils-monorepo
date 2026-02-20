import '../../.css/index.css'
import basicDemo from './basicDemo'

const GetElementSizeDemo = () => {
  return (
    <div>
      <div
        id="demo-box"
        style={{
          width: '200px',
          height: '100px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '8px',
          marginBottom: '16px',
        }}
      />
      <div className="button" onClick={basicDemo}>
        获取元素尺寸
      </div>
    </div>
  )
}

export default GetElementSizeDemo
