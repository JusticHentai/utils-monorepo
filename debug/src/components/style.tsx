import { container, ContainerProps } from '@justichentai/style'
import styled from 'styled-components'

const Container = styled.div<ContainerProps>`
  ${container}
`

function Components() {
  return (
    <>
      <Container size="xy" type="a" />
    </>
  )
}

export default Components
