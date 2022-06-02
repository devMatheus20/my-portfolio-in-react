import styled, { keyframes } from 'styled-components'




const typeWrite = keyframes`

0%,100% {opacity:1}

100%{opacity:0}

`

const moveUndraw = keyframes`

from {transform: translateY(0px)}

to  {transform: translateY(-15px);}

`

export const Home = styled.section`
    display: flex;
    margin-top: 100px;
    padding: 70px 40px;
`

export const Article = styled.article`
    width: 60%;
    min-width: 501px;
    margin-top: 50px;
    margin-left: 2%;
`

export const Span = styled.span`
    display: block;
    font-size: 2.2rem;
    color: #FFF5EE;
`

export const H1 = styled.h1`
    font-size: 6.4rem;
    font-weight: 700;
    color: #FFF5EE;
    
    span {
        color: #FFD700;
    }

`

export const Paragraph = styled.p`
    position: relative;
    font-size: 2.7rem;
    color: #FFF5EE;


    ::after {
        content: "|";
        position: relative;
        left: 8px;
        bottom: 2px;
        animation: ${typeWrite} 1s infinite;
    }
`

export const DivButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 30px;
`

export const Image = styled.img`
    position: relative;
    bottom: 60px;
    right: 40px;
    max-width: 38%;
    animation: ${moveUndraw} 1.7s infinite alternate-reverse linear;

`





