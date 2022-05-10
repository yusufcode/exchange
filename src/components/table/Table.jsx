import React from 'react'
import {Table} from './css'
import TableTitle from '../tableTitle'
import Buttons from '../buttons'
import TableContent from '../tableContent'

export default function TableFunc() {
  return (
    <Table>
      <TableTitle>Piyasalar</TableTitle>
      <TableContent/>
      <Buttons/>
    </Table>
  )
}
