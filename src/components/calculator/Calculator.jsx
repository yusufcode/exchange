import React, {useState, useEffect} from 'react'
import DownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChangeIcon from '@mui/icons-material/Cached';
import {
  Calculator,
  CalculatorTitle,
  Calculator1Div,
  Calculator1Input,
  Calculator1Select,
  Calculator1SelectHeader,
  Calculator1Drop,
  Calculator1DropUl,
  Calculator1DropLi,
  ChangeButton,
  Calculator2Div,
  Calculator2Input,
  Calculator2Label
  } from './css'

export default function CalculatorFunc(props) {

  const {currencies} = props

  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('TRY')
  const [amount, setAmount] = useState(1)
  const [result, setResult] = useState(0)

  const requestURL = `https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`

  useEffect(() => {
    fetch(requestURL)
      .then(res => res.json())
      .then(data => setResult(data.result))
  }, [requestURL])

  const [dropdown, setDropdown] = useState(0)

  function changeFrom(name){
    if(name != to){
      setFrom(name)
    } else{
      setTo(from)
      setFrom(name)
    }
  }

  function turnCurrencies(){
    setFrom(to)
    setTo(from)
    setAmount(result)
    setResult(amount)
  }

  return (
    <Calculator>
      <CalculatorTitle>Döviz Çevir</CalculatorTitle>
      
      <Calculator1Div>
        <Calculator1Input value={amount} onChange={(e) => setAmount(e.target.value)}/>
        <Calculator1Select onClick={() => setDropdown(!dropdown)}>
          <Calculator1SelectHeader>{from} <DownIcon className="icon"/></Calculator1SelectHeader>
          {
            dropdown ? 
            <Calculator1Drop>
              <Calculator1DropUl>
                {
                  Object.keys(currencies).map((currency, key) => 
                    <Calculator1DropLi key={key} onClick={() => changeFrom(currencies[currency].nameShort)}>{currencies[currency].nameShort}</Calculator1DropLi>
                  )
                }
              </Calculator1DropUl>
            </Calculator1Drop>
          : false
          }
          
        </Calculator1Select>
      </Calculator1Div>

      <ChangeButton onClick={() => turnCurrencies()}>
        <ChangeIcon className="icon"/>
      </ChangeButton>

      <Calculator2Div>
        <Calculator2Input value={amount > 0 ? result : amount} readOnly/>
        <Calculator2Label>{to}</Calculator2Label>
      </Calculator2Div>
      
    </Calculator>
  )
}
