import React, {useState, useEffect} from 'react'
import {
  BoxRow,
  FlagDiv,
  Img,
  NameDiv,
  NameShort,
  NameLong,
  RateDiv,
  RateLabel,
  RatePrice
} from './css'
import Loader from 'react-loader-spinner'

export default function BoxRowFunc(props) {

  const requestURL = `https://api.exchangerate.host/latest?base=${props.currency.nameShort}`

  useEffect(() => {
    fetch(requestURL)
      .then(res => res.json())
      .then(data => setRate(data.rates.TRY))
  }, [requestURL])
  
  const [rate, setRate] = useState()
  
  return (
    <BoxRow className='boxRow'>
      <FlagDiv>
        <Img src={`/img/flags/${props.currency.flag}`}/>
      </FlagDiv>
      <NameDiv>
        <NameShort>{props.currency.nameShort}</NameShort>
        <NameLong>{props.currency.nameLong}</NameLong>
      </NameDiv>
      <RateDiv>
        <RateLabel>ALIŞ</RateLabel>
        <RatePrice>
        {
          rate ? 
          (rate + rate*0.05).toFixed(4)
          : <Loader type="TailSpin" color="#2b3b48" height={15} width={15}/>
        }
        </RatePrice>
      </RateDiv>
      <RateDiv>
        <RateLabel>SATIŞ</RateLabel>
        <RatePrice>
        {
          rate ? 
          parseFloat(rate).toFixed(4)
          : <Loader type="TailSpin" color="#2b3b48" height={15} width={15}/>
        }
        </RatePrice>
      </RateDiv>
    </BoxRow>
  )
}
