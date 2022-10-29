import React from 'react'
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Singlemovies from './Singlemovies'
import Error from './Error'


const App = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route  path='movie/:id' element={<Singlemovies />} />
            <Route path='*' element={<Error/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
