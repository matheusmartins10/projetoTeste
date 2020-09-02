import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './Pages/Home/index'
import Cadastro from './Pages/Cadastro/index'
import Prontuario from './Pages/Prontuario/index'

import Header from './Components/Header/index'
import Footer from './Components/Footer/index'

const Router = () => {
    return (
        <BrowserRouter>
           <Header />
           <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/cadastro" element={<Cadastro />} />
               <Route path="/prontuario" element={<Prontuario />} />
           </Routes>
           <Footer />
        </BrowserRouter>
    )
}

export default Router