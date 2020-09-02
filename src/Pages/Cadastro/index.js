import React, {useState, useEffect} from 'react'

import api from '../../Services/api'

import {Container} from './styles'

const Cadastro = () => {
    const [queixa, setQueixa] = useState([])
    const [doenca, setDoenca] = useState([])

    const [selectQueixa, setSelectQueixa] = useState('')
    const [selectDoenca, setSelectDoenca] = useState('')
    const [molestia, setMolestia] = useState('')


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




    return (
        <Container>
            <form>
                <div className="field">
                <label htmlFor="queixa">Queixa Principal</label>
                <select onChange={(e) => setSelectQueixa(e.target.value)} name="queixa" >
                    <option value="0">Seleciona uma queixa</option>
                    {queixa.map(q => (
                        <option key={q.id} value={q.label} >
                             {q.label}
                        </option>
                    ))}
                </select>
                </div>

                <div className="field">
                <label htmlFor="queixa">Doenças Adulto</label>
                <select   onChange={(e) => setSelectDoenca(e.target.value)} name="doenca" >
                    <option value="0">Seleciona uma doença</option>
                    {doenca.map(d => (
                        <option key={d.id} value={d.label} >
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
                minLength={10}  
                maxLength={1000} 
                required 
                onChange={(e) => setMolestia(e.target.value)}
                />
                </div>

                <button type="submit" >Salvar</button>
            </form>
        </Container>
    )
}

export default Cadastro
