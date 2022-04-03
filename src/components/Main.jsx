import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
  background-color:#fff;
  margin-top:60px;
`

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0 auto;
  max-width:1000px;
`

export const Main = () => {
  return (
    <Main>
      <MainContainer>
        <Container>

        </Container>
      </MainContainer>
    </Main>
  )
}

export default Main;
