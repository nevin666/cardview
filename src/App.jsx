import { useState } from 'react'
import './App.css'
import View from './Components/View'
import Add from './Components/Add'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Mecad from './Components/Mecad'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      {/* <h1>this is from app.jsx</h1> */}
      {/* <View/>
      <Add/> */}
      <Routes>
        <Route path='/' element={<View/>}></Route>
        <Route path='/add' element={<Add person={{
          name:'hari',
          email:'hari@gmail.com',
          password:'harishankar',
          address:'new house'
           }}/>}></Route>
        <Route path='/Mcard' element={<Mecad/>}></Route>
      </Routes>
    </>
  )
}

export default App
