import { Col, Row } from '@justichentai/components'

const Components = () => {
  const list = new Array(24).fill(0)

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          width: '500px',
          height: '600px',
          background: 'gray',
        }}
      >
        <Row gutter={[16, 16]}>
          {list.map((item, index) => {
            return (
              <Col key={index} span={4}>
                <div
                  style={{
                    width: '100%',
                    background: 'blue',
                  }}
                >
                  1
                </div>
              </Col>
            )
          })}
        </Row>
      </div>
    </div>
  )
}

export default Components
