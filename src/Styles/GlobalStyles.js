import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  * {
      padding: 0;
      margin: 0;
      outline: 0;
      box-sizing: border-box;
  }

  a {
      text-decoration: none;
  }

  ul, li{
      list-style: none;
  }

  img {
      max-width: 100%;
      display: block;
      object-fit: cover;
  }

  body {
      max-width: 960px;
      margin: 20px auto;
      font-family: sans-serif;
      font-size: 16px;
      color: #252525;
      background: #f4f4f4;
  }
`