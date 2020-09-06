import React from 'react'
import styled from 'styled-components'
import ButtonsGroup  from './Components/ButtonsGroup'

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`

export default function App() {
  return (
    <Container>
      <ButtonsGroup/>
    </Container>
  )
}
