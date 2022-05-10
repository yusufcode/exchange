import React from 'react'
import {TableContent, Boxes, CalculatorCover} from './css'
import Calculator from '../calculator'
import Box from '../box'

export default function TableContentFunc() {

  const currenciesList = {
    USD:{
      flag: 'US.png',
      nameShort: 'USD',
      nameLong: 'Amerikan Doları'
    },
    JPY:{
      flag: 'JP.png',
      nameShort: 'JPY',
      nameLong: 'Japon Yeni'
    },
    DKK:{
      flag: 'DK.png',
      nameShort: 'DKK',
      nameLong: 'Danimarka Kronu'
    },
    EUR:{
      flag: 'EU.png',
      nameShort: 'EUR',
      nameLong: 'Avrupa Para Birimi'
    },
    GBP:{
      flag: 'GB.png',
      nameShort: 'GBP',
      nameLong: 'İngiliz Sterlini'
    },
    NOK:{
      flag: 'NO.png',
      nameShort: 'NOK',
      nameLong: 'Norveç Kronu'
    },
    RUB:{
      flag: '',
      nameShort: 'RUB',
      nameLong: 'Rus Rublesi'
    },
    TRY:{
      flag: '',
      nameShort: 'TRY',
      nameLong: 'Türk Lirası'
    }
  }
  
  return (
    <TableContent>
      <Boxes>
        <Box currencies={[currenciesList.USD, currenciesList.JPY, currenciesList.DKK]}/>
        <Box currencies={[currenciesList.EUR, currenciesList.GBP, currenciesList.NOK]}/>
      </Boxes>

      <CalculatorCover>
        <Calculator currencies={currenciesList}/>
      </CalculatorCover>
    </TableContent>
  )
}
