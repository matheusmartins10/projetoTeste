import React, {useEffect} from 'react'

import {useHistory} from 'react-router-dom'

import {Container} from './styles'

import ErrorImage from '../../assets/error.svg'

const Error = ({error}) => {
    const history = useHistory()

    useEffect(() => {
        setTimeout(() => {
            history.push('/')
        }, 3000)
    }, [error])

    return (
        <Container>
           <img src={ErrorImage} alt="400"/>
            <h2> Houve algum probleminha no registro do prontuário :( </h2>
            <span>Verifique se preencheu todos os campos</span>
        </Container>
    )
}

export default Error
