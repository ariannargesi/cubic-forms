import React from 'react'
import styled from 'styled-components'
import ButtonsGroup  from './Components/ButtonsGroup'
import Cube from './Components/Cube'
const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`
const CubeWrapperStyled = styled.div`
  width: 200px;
  height: 200px;
  perspective: 600px;
  position: absolute;
  transform: scale(2);
  top: 20%;
  left: 30%;
`

export default function App() {
  return (
    <Container>
      <ButtonsGroup/>
      <CubeWrapperStyled>
        <Cube/>
      </CubeWrapperStyled>
    </Container>
  )
}
