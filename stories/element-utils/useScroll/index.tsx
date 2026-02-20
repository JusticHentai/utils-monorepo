import '../../.css/index.css'
import { useRef } from 'react'
import useScroll from '../../../packages/element-utils/src/useScroll'
import { action } from 'storybook/actions'

const UseScrollDemo = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const scroll = useScroll(scrollRef)

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>滚动位置监听</div>
      <div
        style={{
          marginBottom: 16,
          padding: 12,
          background: '#f5f5f5',
          borderRadius: 8,
        }}
      >
        <div>
          scrollLeft: <span style={{ color: '#1890ff' }}>{scroll?.left ?? 0}</span>
        </div>
        <div>
          scrollTop: <span style={{ color: '#52c41a' }}>{scroll?.top ?? 0}</span>
        </div>
      </div>

      <div style={{ marginBottom: 8, color: '#666' }}>尝试滚动下方内容：</div>
      <div
        ref={scrollRef}
        style={{
          width: 300,
          height: 200,
          overflow: 'auto',
          border: '1px solid #d9d9d9',
          borderRadius: 8,
          padding: 16,
          background: '#fafafa',
        }}
      >
        <div style={{ width: 500 }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
            aspernatur atque, debitis ex excepturi explicabo iste iure labore
            molestiae neque optio perspiciatis.
          </p>
          <p>
            Aspernatur cupiditate, deleniti id incidunt mollitia omnis! A
            aspernatur assumenda consequuntur culpa cumque dignissimos enim eos,
            et fugit natus nemo nesciunt.
          </p>
          <p>
            Alias aut deserunt expedita, inventore maiores minima officia porro
            rem. Accusamus ducimus magni modi mollitia nihil nisi provident.
          </p>
          <p>
            Alias aut autem consequuntur doloremque esse facilis id molestiae
            neque officia placeat, quia quisquam repellendus reprehenderit.
          </p>
          <p>
            Adipisci blanditiis facere nam perspiciatis sit soluta ullam!
            Architecto aut blanditiis, consectetur corporis cum deserunt
            distinctio dolore eius est exercitationem.
          </p>
          <p>Ab aliquid asperiores assumenda corporis cumque dolorum expedita.</p>
          <p>
            Culpa cumque eveniet natus totam! Adipisci, animi at commodi delectus
            distinctio dolore earum, eum expedita facilis.
          </p>
          <p>
            Quod sit, temporibus! Amet animi fugit officiis perspiciatis, quis
            unde. Cumque dignissimos distinctio, dolor eaque est fugit nisi non
            pariatur porro possimus, quas quasi.
          </p>
        </div>
      </div>

      <div
        className="button"
        style={{ marginTop: 16 }}
        onClick={() => {
          if (scrollRef.current) {
            scrollRef.current.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
            action('scrollTo')({ top: 0, left: 0 })
          }
        }}
      >
        滚动到顶部
      </div>
    </div>
  )
}

export default UseScrollDemo
