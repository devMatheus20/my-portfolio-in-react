import styled, { keyframes } from 'styled-components'


// HEADER STYLES ----------------------<

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    padding: 15px 80px;
    width: 100%;
    border-bottom: 1px solid rgba(114, 114, 126, 0.2);
    opacity: 0.97;
    z-index: 99;
    background-color: #171717;

`

export const Logo = styled.h1`
    text-decoration: none;

    outline: none;

    a {
        font-family: "IBM Plex Sans", sans-serif;
        color: #FAFAFA;
        font-size: 2.5rem;
    }
`

export const List = styled.div`
    display: block;
`

export const Link = styled.a`
    position: relative;
    margin-right: 32px;
    text-decoration: none;
    font-size: 1.7rem;
    font-weight: 400;
    color: #cccccc;
    outline: none;

    :hover {
        color: #fff;
    }

    ::after  {
        content: "";
        background-color: #FFD700;
        position: absolute;
        top: 35px;
        right: 0px;
        height: 2px;
        width: 100%;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.3s linear;
    }

    :hover::after {
        transform: scaleX(1);
        transform-origin: left;
    }

    
`
// -------------------------------<





// HOME STYLES ----------------------<


// KeyFrames ------------------<

const typeWrite = keyframes`

0%,100% {opacity:1}

100%{opacity:0}

`

const moveUndraw = keyframes`

from {transform: translateY(0px)}

to  {transform: translateY(-15px);}

`
// ------------------<

export const Home = styled.section`
    display: flex;
    margin-top: 100px;
    padding: 70px 40px;
`

export const ArticleHome = styled.article`
    width: 60%;
    min-width: 501px;
    margin-top: 50px;
    margin-left: 2%;
`

export const SpanHome = styled.span`
    display: block;
    font-size: 2.2rem;
    color: #FFF5EE;
`

export const H1Home = styled.h1`
    font-size: 6.4rem;
    font-weight: 700;
    color: #FFF5EE;
    
    span {
        color: #FFD700;
    }

`

export const ParagraphHome = styled.p`
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

export const ImageHome = styled.img`
    position: relative;
    bottom: 60px;
    right: 40px;
    max-width: 38%;
    animation: ${moveUndraw} 1.7s infinite alternate-reverse linear;

`

// -------------------------------<



// ABOUT STYLES ----------------------<

export const About = styled.section `
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 70px 20px;
    background-color: #191919;

`


export const ImageAbout = styled.img`
    max-width: 340px;
    margin-right: 8%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    border: 1px solid #191919;
    transition: border 1s ease;

    :hover {
        border: 1px solid #FFD700;
    }

`

export const ArticleAbout = styled.article`
    max-width: 630px;
`

export const TitleAbout = styled.h2 `
    margin-bottom: 20px;
    color: #fafafa;
    font-size: 4rem;
    font-weight: 500;

`

export const ParagraphAbout = styled.p `
    font-size: 1.8rem;
    line-height: 3.2rem;
    color: #cccccc;

    span {
        color: #FFD700;
        font-weight: 600;
    }
`
