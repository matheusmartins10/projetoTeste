import React from 'react'

import { Link } from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa'


import {Container } from './styles'
import Image from '../../assets/backgroud.svg'

const Home = () => {

    return (
        <Container>
             <div className="image">
                 <img src={Image} alt="img"/>
             </div>
             <div className="btn">
                    <h2>Realizar novo <span>prontuário</span></h2>
                    <p>Faça prontuário de seus pacientes de forma rápida e eficiente. Deixe tudo armazenado no nosso sistema :)</p>
                    <Link to="/cadastro">
                         Adicionar novo prontuário
                         <FaArrowRight  size={16} style={{marginLeft: 10}} />
                    </Link>
             </div>
        </Container>
    )
}

export default Home
