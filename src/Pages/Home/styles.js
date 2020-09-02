import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   align-items: center;
   flex-wrap: wrap;
   justify-content: space-between;
   flex-direction: row-reverse;

   margin: 60px auto;

   .image {
       img {
           max-width: 480px;
       }
   }

   @media (max-width: 540px){
       .image {
           display: none;
       }
   }

   .btn {
       max-width: 300px;

       h2 {
           font-size: 38px;
           font-style:italic;
           margin: 20px auto;

           span {
               color: #e02041;
           }
       }

       p {
           margin: 40px auto;
           line-height: 1.4rem;
           font-style: italic;
       }

       a {
           background: #e02041;
           color: #fff;
           font-weight: bold;
           padding: 20px;
           border-radius: 20px;
       }

       a:hover {
           filter: brightness(90%);
       }
   }

   @media (max-width: 768px){
       justify-content: center;
       align-items: center;

       .image {
           display: none;
       }

       .btn {
           h2 {
               text-align: center;
           }

           P {
               text-align: center;
           }

           a {
               display: flex;
               justify-content: center;
               width: 300px;
           }
       }
   }

   @media (max-width: 540px){
       .btn {
           margin: 10px auto;

           h2 {
               font-size: 32px;
               text-align: center;
               font-style: initial;
           }

           p {
               text-align: center;
               font-style: initial;
           }

           a {
               display: flex;
               justify-content: center;
               width: 300px;
           }
       }
   }
`