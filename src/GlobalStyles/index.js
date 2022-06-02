import { createGlobalStyle } from "styled-components";




export default createGlobalStyle `

* {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

html {
    scroll-behavior: smooth;
    font-size: 65%;
}


body {
    background-color: #171717;
}

body a {
    text-decoration: none;
}

::-webkit-scrollbar {
    width: 8px;
}
  
::-webkit-scrollbar-track {
    background-color: #171717;
}
  
::-webkit-scrollbar-thumb {
    background-color: #FFD700;
    border-radius: 10px;
}


`