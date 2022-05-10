import React from 'react'
import {
  Box
} from './css'
import BoxRow from '../boxRow'

export default function BoxFunc(props) {
  return (
    <Box>
      {
        props.currencies ? 
        props.currencies.map((currency, key) => 
          <BoxRow key={key} currency={currency}/>
        )
        : false
      }
    </Box>
  )
}
