import styled from 'styled-components/macro'

export const BoxRow = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #f1f1f1;
  padding: 25px 0;

  &:last-child{
    border-bottom: 0;
  }

  @media(max-width: 768px){
    padding: 15px 0;

    &:last-child{
      border-bottom: 1px solid #f1f1f1;
    }
  }
`

export const FlagDiv = styled.div`
  margin-right: 15px;
`

export const Img = styled.img`
  width: 43px;
  height: 30px;
`

export const NameDiv = styled.div`
  width: max-content;
  margin-right: auto;
`

export const NameShort = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  margin: 0;
  text-transform: uppercase;
`

export const NameLong = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 24px;
  margin: 0;
`

export const RateDiv = styled.div`
  text-align: right;
  width: 60px;
  margin-right: 40px;
  transition: 0.2s all;

  &:last-child{
    margin-right: 0px;
  }

  @media(max-width: 1200px){
      margin-right: 15px;
    }
`

export const RateLabel = styled.label`
  font-size: 12px;
  font-weight: 500;
  margin: 0;
  text-transform: uppercase;
  color: #4f6477;
`

export const RatePrice = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin: 0;
`