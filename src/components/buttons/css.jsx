import styled from 'styled-components/macro'

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: max-content;

  @media(max-width: 950px){
    margin-top: 20px;
  }

  @media(max-width: 768px){
    flex-direction: column;
    width: 100%;
    margin-top: 26px;
  }
`

export const Button = styled.button`
  width: 352px;
  height: 48px;
  background-color: #2b3b48;
  border: 1px solid #2b3b48;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  margin-right: 75px;
  cursor: pointer;
  transition: 0.2s all;
  display: flex;
  justify-content: center;
  align-items: center;

  &:last-child{
    background-color: transparent;
    color: #2b3b48;
    margin-right: 0;
    
    &:hover{
      background-color: #2b3b48;
      color: #fff;
    }

    & .icon{
      display: none;
    }

    @media(max-width: 768px){
      border: 0;
      margin-top: 10px;
      
      & .icon{
        display: block;
      }
    }
  }

  @media(max-width: 1200px){
    width: 315px;
    margin-right: 30px;
  }

  @media(max-width: 768px){
    margin-right: 0;
    width: 100%;
  }
`