import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './Pages/Home/index'
import Cadastro from './Pages/Cadastro/index'
import Prontuario from './Pages/Prontuario/index'


import Header from './Components/Header/index'

const Router = () => {
    return (
        <BrowserRouter>
           <Header />
           <Switch>
               <Route path="/" exact component={Home} />
               <Route path="/cadastro" component={Cadastro } />
               <Route path="/prontuario" component={Prontuario} />
           </Switch>
        </BrowserRouter>
    )
}

export default Router