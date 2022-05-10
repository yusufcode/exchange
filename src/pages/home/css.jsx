import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  @media(max-width: 768px){
    display: initial;
    justify-content: initial;
    align-items: initial;
    height: initial;
    width: initial;
  }
`
