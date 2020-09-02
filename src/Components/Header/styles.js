import styled from 'styled-components'

export const  Container = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  a {
    font-family: 'Grand Hotel', cursive;
    font-size: 46px;
    color: #000;
    font-weight: bold;

    span {
      color:  #e02041;
    }
  }

  @media(max-width: 540px){
      justify-content: center;

      h1 {
        font-size: 38px;
      }
  }
  
`