import styled from 'styled-components'

export const Container = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: fixed;
  height: 100%;
  top: 0;
  width: 100%;
  background: #f4f4f4;
  color: #252525;

    img {
      width: 300px;
    }


    h2 {
      margin: 10px 0;
      font-family: sans-serif;
      font-style: italic;
  }

  span {
      font-weight: bold;
      font-size: 22px;
  }
`