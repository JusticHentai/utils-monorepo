import '../../.css/index.css'
import useBasicDemo from './basicDemo.tsx'
import useMultiDemo from './multiDemo.tsx'

const UseMergePropsDemo = () => {
  const { showMergedProps } = useBasicDemo()
  const { showMergedProps: showMultiMergedProps } = useMultiDemo()

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>基础用法</div>
      <div className="button" onClick={showMergedProps}>
        合并两个属性对象
      </div>

      <div style={{ margin: '16px 0', fontWeight: 'bold' }}>多对象合并</div>
      <div className="button" onClick={showMultiMergedProps}>
        合并三个配置对象
      </div>
    </div>
  )
}

export default UseMergePropsDemo
