import styled from 'styled-components/macro'

export const Calculator = styled.div`
  width: 255px;
  height: 288px;
  text-align: center;
  padding: 20px;
  background: rgb(43,59,72);
  background: linear-gradient(154deg, rgba(43,59,72,1) 032%, rgba(128,147,165,1) 115%);
  
  @media(max-width: 1200px){
    width: 220px;
  }

  @media(max-width: 950px){
    width: 50%;
  }
  
  @media(max-width: 768px){
    width: 100%;
  }
`
export const CalculatorTitle = styled.h4`
  font-size: 20px;
  font-weight: 500;
  line-height: 34px;
  color: #fff;
  margin: 0 0 15px 0;
`

export const Calculator1Div = styled.div`
  display: flex;
  justify-content: center;
  height: 48px;
  position: relative;
  background-color: #fff;
`

export const Calculator1Input = styled.input`
  font-size: 16px;
  font-weight: 500;
  border: 0;
  outline: none;
  width: calc(100% - 85px);
  padding: 0 15px;
  color: #2b3b48;
`

export const Calculator1Select = styled.div`
  width: 85px;
  border-left: 1px solid #f5f5f5;
`

export const Calculator1SelectHeader = styled.div`
  font-size: 16px;
  font-weight: 500;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;

  & .icon{
    margin-left: 10px;
    width: 20px;
    height: 20px;
  }
`

export const Calculator1Drop = styled.div`
  width: 40%;
  position: absolute;
  z-index: 10;
  background-color: #fff;
  border:1px solid #f5f5f5;
  right: 0;
  top: 48px;
`

export const Calculator1DropUl = styled.ul`
  list-style: none;
  padding:0;
  margin:0;
`

export const Calculator1DropLi = styled.li`
  padding: 5px;
  border-bottom: 1px solid #f5f5f5;
  cursor: pointer;
  
  &:hover{
    background-color: #f5f5f5;
  }

  &:last-child{
    border-bottom: 0;
  }
`

export const ChangeButton = styled.button`
  color: #fff;
  border: 3px solid #fff;
  display: inline-block;
  padding: 10px;
  border-radius: 100%;
  line-height: 0px;
  background-color: transparent;
  margin: 20px 0;
  cursor: pointer;
  transition: 0.2s all;
  outline: none;

  &:hover{
    background-color: #fff;
    color: #2b3b48;
  }

  & .icon{
    width: 26px;
    height: 26px;
  }
`

export const Calculator2Div = styled.div`
  display: flex;
  justify-content: center;
  height: 48px;
  position: relative;
  background-color: #fff;
`

export const Calculator2Input = styled.input`
  font-size: 16px;
  font-weight: 500;
  border: 0;
  outline: none;
  width: calc(100% - 50px);
  padding: 0 15px;
  color: #2b3b48;
`

export const Calculator2Label = styled.label`
  width: 50px;
  height: 100%;
  font-size: 16px;
  font-weight: 500;
  background-color: #fff;
  display: block;
  align-items: center;
  display: flex;
  justify-content: center;
`