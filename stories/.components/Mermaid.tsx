import mermaid from 'mermaid'
import React, { useEffect, useRef } from 'react'

interface MermaidProps {
  chart: string
  id?: string
  config?: any
}

export const Mermaid: React.FC<MermaidProps> = ({
  chart,
  id = `mermaid-${Math.random().toString(36).substr(2, 9)}`,
  config = {},
}) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current && chart) {
      // 初始化 mermaid 配置
      mermaid.initialize({
        startOnLoad: false,
        theme: 'default',
        securityLevel: 'loose',
        fontFamily: 'Arial, sans-serif',
        fontSize: 14,
        ...config,
      })

      // 渲染图表
      mermaid
        .render(id, chart)
        .then(({ svg }) => {
          if (ref.current) {
            ref.current.innerHTML = svg
          }
        })
        .catch((error) => {
          console.error('Mermaid rendering error:', error)
          if (ref.current) {
            ref.current.innerHTML = `<div style="color: red; padding: 10px; border: 1px solid red; border-radius: 4px;">
            <strong>Mermaid 渲染错误:</strong><br/>
            ${error.message || '未知错误'}
          </div>`
          }
        })
    }
  }, [chart, id, config])

  return (
    <div
      ref={ref}
      style={{
        textAlign: 'center',
        margin: '20px 0',
        overflow: 'auto',
      }}
    />
  )
}

export default Mermaid
