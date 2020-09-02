import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   

   form {
    max-width: 540px;
    margin: 0 auto;
 
    
    .field{
        flex: 1;
        display: flex;
        flex-direction: column;
        margin-bottom: 24px;

        background: #f0f0f5;
        border-radius: 8px;
        border: 0;
        padding: 16px 24px;
        font-size: 16px;
        color: #6c6c80;

        label {
            padding: 5px 0;
        }

        
     }

    button {
        background: #e02041;
        border: none;
        color: #fff;
        font-weight: bold;
        padding: 20px;
        width: 300px;
        border-radius: 4px;
        cursor: pointer;
    }

    button:hover {
        filter: brightness(90%);
    }

  }
`