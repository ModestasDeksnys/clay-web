import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Create from './Create'
import Home from './CrudHome'
import Read from './Read'
import Update from './Update'


function CrudApp() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/create' element={<Create />}></Route>
            <Route path='/update/:id' element={<Update />}></Route>
            <Route path='/read/:id' element={<Read />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default CrudApp