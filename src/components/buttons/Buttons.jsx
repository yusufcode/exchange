import React from 'react'
import RightIcon from '@mui/icons-material/ChevronRight';
import {Buttons, Button} from './css'

export default function ButtonsFunc() {
  return (
    <Buttons>
      <Button>Detaylı Bilgi</Button>
      <Button>Tüm Piyasalar <RightIcon className="icon"/></Button>
    </Buttons>
  )
}
