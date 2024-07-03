import { TextField,Box, Button } from '@mui/material';
import React, { useState } from 'react'

const Add = ({person}) => {
    const [Page,setpage]=useState('Movie')
    const[count,setCount]=useState(0)
    const[form,setForm]=useState({
      name:person.name,
      email:person.email,
      password:person.password,
      address:person.address})

    function valueAdd() {
      //setCount(count+1)
      console.log({form})
    }
    function valueCap(e) {
      console.log(e)
      setForm({...form,[e.target.name]:e.target.value})
       // setCount(count+1)
    }
  return (
    <Box
    style={{marginTop:'7%'}}
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <h1>
        Welcome to {Page} Page
    </h1>
    <div>
      <TextField
        required
        id="outlined-read-only-input"
        label="Name"
        name='Name'
        value={form.name}
        onChange={valueCap}
       // defaultValue=""
      />
      </div>
      <div>
      <TextField
        id="outlined-read-only-input"
        label="Email"
        name='email'
        type='email'
        value={form.email}
        onChange={valueCap}
        //defaultValue=""
      />
      </div>
      <div>
      <TextField
        id="outlined-read-only-input"
        label="Password"
        name='password'
        type="password"
        value={form.password}
        onChange={valueCap}

        //autoComplete="current-password"
      />
      </div>
      
      <div>
      <TextField
        id="outlined-read-only-input"
        label="Address"
          name='Address'
          value={form.Address}
          onChange={valueCap}
          //type="number"
          
        />
      </div>
    <div>
        <Button variant='contained' onClick={valueAdd}>
            Register
        </Button>
        <br />
         {/* <small>
            Button Is Clicked {count} times
        </small>  */}
    </div> 
    </Box>
  );
}
export default Add