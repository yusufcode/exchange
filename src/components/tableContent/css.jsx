import styled from 'styled-components/macro'

export const TableContent = styled.div`
  display: flex;
  flex-direction: row;

  @media(max-width: 950px){
    flex-direction: column;
  }

  @media(max-width: 768px){
    flex-direction: column;
  }
`

export const Boxes = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;

  @media(max-width: 768px){
    flex-direction: column;
  }
`

export const CalculatorCover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  margin-left: 75px;
  transition: 0.2s all;

  @media(max-width: 1200px){
    margin-left: 30px;
  }

  @media(max-width: 950px){
    margin: 0;
  }

  @media(max-width: 768px){
    margin: 0;
    margin-top: 10px;
  }
`