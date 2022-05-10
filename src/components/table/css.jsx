import styled from 'styled-components/macro'

export const Table = styled.div`
  width: max-content;
  height: 520px;
  display: flex;
  flex-direction: column;
  background-color: #fff;

  @media(max-width: 768px){
    width: 100%;
    height: initial;
    padding: 9px 15px;
  }
`