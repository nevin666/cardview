import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow,Paper} from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const 
View = () => {
  const [rows,setRows]=useState([])
  useEffect(()=>{
    axios.get('https://dummyjson.com/users').then((res)=>{
      //console.log(res.data.users)
      setRows(res.data.users)
    })
  },[])

    // const rows=[{name:'Maya',email:'maya@gmail.com',phone:9947698860},
    //     {name:'Elzza',email:'elza@gmail.com',phone:9947398860},
    //     {name:'taya',email:'taya@gmail.com',phone:9947972860}
    // ]
  return (
    <div>
         <TableContainer style={{marginTop:'3%'}}component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.firstName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default View