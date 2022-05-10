import styled from 'styled-components/macro'

export const Box = styled.div`
  /* border: 1px solid purple; */
  width: 352px;
  height: 100%;
  margin-right: 75px;
  display: flex;
  flex-direction: column;
  transition: 0.2s all;

  &:last-child{
    margin-right: 0;

    @media(max-width: 768px){
      & .boxRow:last-child{
        border-bottom: 0;
      }
    }
  }

  @media(max-width: 1200px){
    width: 315px;
    margin-right: 30px;
  }

  @media(max-width: 768px){
    margin-right: 0px;
    width: 100%;
  }
`
