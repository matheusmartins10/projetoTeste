import React, {useState, useEffect} from 'react'

import { useHistory } from 'react-router-dom'

import api from '../../Services/api'

import {Container} from './styles'

import Prontuario from '../Prontuario/index'
import ErrorSystem from '../../Components/Error/index'


const Cadastro = () => {
    const [queixa, setQueixa] = useState([])
    const [doenca, setDoenca] = useState([])

    const [selectQueixa, setSelectQueixa] = useState(0)
    const [selectDoenca, setSelectDoenca] = useState([])
    const [historico, setHistorico] = useState('')

    const [dados, setDados] = useState({})

    const [error, setError] = useState(false)

    const history = useHistory()


    useEffect(() => {
        const fetchQueixas = async () => {
            const response = await api.get('queixas')

            setQueixa(response.data.data)
        }
        
        fetchQueixas()
    }, [])

    useEffect(() => {
        const fetchDoenca = async () => {
            const response = await api.get('doencas')


            setDoenca(response.data.data)
        }

        fetchDoenca()
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault()
        

        const data = {
            queixa: selectQueixa,
            doenca: selectDoenca,
            historico: historico    
        }

        try {
          const response =  await api.post('/prontuario', data)
          setDados(response.data)

         history.push('/prontuario')
        }
        catch(err){
          setError(true)
        }
    }


    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <div className="field">
                <label htmlFor="queixa">Queixa Principal</label>
                <select onChange={(e) => setSelectQueixa(e.target.value)} name="queixa" required>
                    <option value={0}>Seleciona uma queixa</option>
                    {queixa.map(q => (
                        <option key={q.id} value={q.id}>
                             {q.label}
                        </option>
                    ))}
                </select>
                </div>

                <div className="field">
                <label htmlFor="queixa">Doenças Adulto</label>
                <select   onChange={(e) => setSelectDoenca(e.target.value)} name="doencas" >
                    <option value={0}>Seleciona uma doença</option>
                    {doenca.map(d => (
                        <option key={d.id} value={d.id} >
                             {d.label}
                        </option>
                    ))}
                </select>
                </div>

                <span>Selecionados: </span>

                <div className="field">
                <label>Histórico da Moléstia</label>
                <textarea 
                rows={5}  
                required
                minLength={10}  
                maxLength={1000} 
                value={historico}
                onChange={(e) => setHistorico(e.target.value)}
                />
                </div>

                <button type="submit" >Salvar</button>
            </form>
            {error && <ErrorSystem error={error} />}
        </Container>
    )
}

export default Cadastro
